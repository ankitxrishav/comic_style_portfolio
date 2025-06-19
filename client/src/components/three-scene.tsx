import { useRef, useEffect, useState } from "react";

// WebGL utility functions
function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;
  
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program linking error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  
  return program;
}

// Create sophisticated 3D model geometry
function createComplexModel() {
  const vertices = [];
  const indices = [];
  const colors = [];
  
  // Create a complex crystalline structure
  const sections = 8;
  const rings = 6;
  
  for (let ring = 0; ring < rings; ring++) {
    const ringRadius = 0.3 + ring * 0.15;
    const ringHeight = (ring - rings/2) * 0.2;
    
    for (let section = 0; section < sections; section++) {
      const angle = (section / sections) * Math.PI * 2;
      const nextAngle = ((section + 1) / sections) * Math.PI * 2;
      
      // Create vertices for this section
      const x1 = Math.cos(angle) * ringRadius;
      const z1 = Math.sin(angle) * ringRadius;
      const x2 = Math.cos(nextAngle) * ringRadius;
      const z2 = Math.sin(nextAngle) * ringRadius;
      
      // Add vertices
      const baseIndex = vertices.length / 3;
      
      // Inner points
      vertices.push(x1 * 0.5, ringHeight, z1 * 0.5);
      vertices.push(x2 * 0.5, ringHeight, z2 * 0.5);
      // Outer points
      vertices.push(x1, ringHeight, z1);
      vertices.push(x2, ringHeight, z2);
      
      // Add colors with gradient effect
      const hue = (ring / rings + section / sections) * 360;
      const color1 = hslToRgb(hue, 0.8, 0.6);
      const color2 = hslToRgb((hue + 60) % 360, 0.9, 0.7);
      
      colors.push(...color1, ...color2, ...color1, ...color2);
      
      // Add indices for triangles
      if (ring < rings - 1) {
        const nextRingBase = baseIndex + sections * 4;
        
        // Connect to next ring
        indices.push(
          baseIndex, baseIndex + 2, nextRingBase,
          baseIndex + 2, nextRingBase + 2, nextRingBase,
          baseIndex + 1, nextRingBase + 1, baseIndex + 3,
          baseIndex + 3, nextRingBase + 1, nextRingBase + 3
        );
      }
      
      // Connect sections within ring
      indices.push(
        baseIndex, baseIndex + 1, baseIndex + 2,
        baseIndex + 1, baseIndex + 3, baseIndex + 2
      );
    }
  }
  
  return { vertices: new Float32Array(vertices), indices: new Uint16Array(indices), colors: new Float32Array(colors) };
}

function hslToRgb(h: number, s: number, l: number): number[] {
  h /= 360;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0), f(8), f(4)];
}

interface FloatingModelProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

function FloatingModel({ mousePosition, scrollY }: FloatingModelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const buffersRef = useRef<any>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }
    
    glRef.current = gl;

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec3 aPosition;
      attribute vec3 aColor;
      uniform mat4 uModelMatrix;
      uniform mat4 uViewMatrix;
      uniform mat4 uProjectionMatrix;
      uniform float uTime;
      varying vec3 vColor;
      varying float vBrightness;
      
      void main() {
        vec3 pos = aPosition;
        
        // Add some wave effect based on time
        pos.y += sin(pos.x * 3.0 + uTime) * 0.1;
        pos.x += cos(pos.z * 2.0 + uTime * 0.8) * 0.05;
        
        gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
        vColor = aColor;
        vBrightness = 0.8 + 0.4 * sin(uTime + pos.x * 2.0);
      }
    `;

    // Fragment shader source
    const fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      varying float vBrightness;
      
      void main() {
        vec3 finalColor = vColor * vBrightness;
        gl_FragColor = vec4(finalColor, 0.9);
      }
    `;

    // Create shaders and program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;
    
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;
    
    programRef.current = program;

    // Create complex model
    const model = createComplexModel();

    // Create buffers
    const positionBuffer = gl.createBuffer();
    const colorBuffer = gl.createBuffer();
    const indexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.colors, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, model.indices, gl.STATIC_DRAW);

    buffersRef.current = {
      position: positionBuffer,
      color: colorBuffer,
      index: indexBuffer,
      indexCount: model.indices.length
    };

    // Get attribute and uniform locations
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    const aColor = gl.getAttribLocation(program, 'aColor');
    const uModelMatrix = gl.getUniformLocation(program, 'uModelMatrix');
    const uViewMatrix = gl.getUniformLocation(program, 'uViewMatrix');
    const uProjectionMatrix = gl.getUniformLocation(program, 'uProjectionMatrix');
    const uTime = gl.getUniformLocation(program, 'uTime');

    // Matrix math helpers
    function createMatrix4(): Float32Array {
      return new Float32Array(16);
    }

    function identity(matrix: Float32Array): Float32Array {
      matrix.fill(0);
      matrix[0] = matrix[5] = matrix[10] = matrix[15] = 1;
      return matrix;
    }

    function perspective(fov: number, aspect: number, near: number, far: number): Float32Array {
      const matrix = createMatrix4();
      const f = 1.0 / Math.tan(fov / 2);
      matrix[0] = f / aspect;
      matrix[5] = f;
      matrix[10] = (far + near) / (near - far);
      matrix[11] = -1;
      matrix[14] = (2 * far * near) / (near - far);
      return matrix;
    }

    function translate(matrix: Float32Array, x: number, y: number, z: number): Float32Array {
      matrix[12] += x;
      matrix[13] += y;
      matrix[14] += z;
      return matrix;
    }

    function rotateX(matrix: Float32Array, angle: number): Float32Array {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const m1 = matrix[4], m2 = matrix[5], m3 = matrix[6], m4 = matrix[7];
      const m5 = matrix[8], m6 = matrix[9], m7 = matrix[10], m8 = matrix[11];
      matrix[4] = m1 * cos + m5 * sin;
      matrix[5] = m2 * cos + m6 * sin;
      matrix[6] = m3 * cos + m7 * sin;
      matrix[7] = m4 * cos + m8 * sin;
      matrix[8] = m5 * cos - m1 * sin;
      matrix[9] = m6 * cos - m2 * sin;
      matrix[10] = m7 * cos - m3 * sin;
      matrix[11] = m8 * cos - m4 * sin;
      return matrix;
    }

    function rotateY(matrix: Float32Array, angle: number): Float32Array {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const m0 = matrix[0], m1 = matrix[1], m2 = matrix[2], m3 = matrix[3];
      const m8 = matrix[8], m9 = matrix[9], m10 = matrix[10], m11 = matrix[11];
      matrix[0] = m0 * cos - m8 * sin;
      matrix[1] = m1 * cos - m9 * sin;
      matrix[2] = m2 * cos - m10 * sin;
      matrix[3] = m3 * cos - m11 * sin;
      matrix[8] = m0 * sin + m8 * cos;
      matrix[9] = m1 * sin + m9 * cos;
      matrix[10] = m2 * sin + m10 * cos;
      matrix[11] = m3 * sin + m11 * cos;
      return matrix;
    }

    const animate = () => {
      if (!gl || !program || !buffersRef.current) return;

      timeRef.current += 0.016;

      // Clear and setup
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(program);

      // Calculate scroll and mouse influence
      const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      const floatY = Math.sin(scrollProgress * Math.PI * 2 + timeRef.current) * 0.3;
      const floatX = 2.5 + Math.cos(scrollProgress * Math.PI * 2 + timeRef.current * 0.7) * 0.4;
      
      const mouseInfluenceX = mousePosition.x * 0.0005;
      const mouseInfluenceY = mousePosition.y * 0.0005;

      // Create matrices
      const projectionMatrix = perspective(Math.PI / 4, canvas.width / canvas.height, 0.1, 100);
      const viewMatrix = identity(createMatrix4());
      translate(viewMatrix, 0, 0, -6);

      const modelMatrix = identity(createMatrix4());
      translate(modelMatrix, floatX, floatY, 0);
      rotateY(modelMatrix, timeRef.current * 0.5 + mouseInfluenceX);
      rotateX(modelMatrix, timeRef.current * 0.3 + mouseInfluenceY);

      // Set uniforms
      gl.uniformMatrix4fv(uProjectionMatrix, false, projectionMatrix);
      gl.uniformMatrix4fv(uViewMatrix, false, viewMatrix);
      gl.uniformMatrix4fv(uModelMatrix, false, modelMatrix);
      gl.uniform1f(uTime, timeRef.current);

      // Bind buffers and set attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, buffersRef.current.position);
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffersRef.current.color);
      gl.enableVertexAttribArray(aColor);
      gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffersRef.current.index);

      // Draw
      gl.drawElements(gl.TRIANGLES, buffersRef.current.indexCount, gl.UNSIGNED_SHORT, 0);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    />
  );
}

export default function ThreeScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    const handleResize = () => {
      setMousePosition(prev => ({ ...prev }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <FloatingModel mousePosition={mousePosition} scrollY={scrollY} />;
}
