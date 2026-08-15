export const mindmapData = {
  unit1: {
    nodes: [
      { id: 'root', type: 'input', data: { label: 'Unit 1: OS & Networks' }, position: { x: 400, y: 50 }, style: { background: '#4f46e5', color: 'white', fontWeight: 'bold', width: 200, padding: 15, borderRadius: 10 } },
      { id: 'os', data: { label: 'Operating Systems' }, position: { x: 200, y: 150 }, style: { background: '#f3f4f6', border: '2px solid #4f46e5', fontWeight: 'bold', borderRadius: 8 } },
      { id: 'net', data: { label: 'Computer Networks' }, position: { x: 600, y: 150 }, style: { background: '#f3f4f6', border: '2px solid #4f46e5', fontWeight: 'bold', borderRadius: 8 } },
      
      { id: 'os-types', data: { label: 'Types of OS' }, position: { x: 50, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      { id: 'os-func', data: { label: 'Core Functions' }, position: { x: 200, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      { id: 'os-winlin', data: { label: 'Windows vs Linux' }, position: { x: 350, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      
      { id: 'net-topo', data: { label: 'Topologies' }, position: { x: 500, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      { id: 'net-osi', data: { label: 'OSI Model' }, position: { x: 650, y: 250 }, style: { background: '#e0e7ff', border: '1px solid #4f46e5', borderRadius: 6 } },
      { id: 'net-tcp', data: { label: 'TCP/IP Suite' }, position: { x: 800, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
    ],
    edges: [
      { id: 'e-root-os', source: 'root', target: 'os', animated: true, style: { stroke: '#4f46e5', strokeWidth: 2 } },
      { id: 'e-root-net', source: 'root', target: 'net', animated: true, style: { stroke: '#4f46e5', strokeWidth: 2 } },
      { id: 'e-os-types', source: 'os', target: 'os-types' },
      { id: 'e-os-func', source: 'os', target: 'os-func' },
      { id: 'e-os-winlin', source: 'os', target: 'os-winlin' },
      { id: 'e-net-topo', source: 'net', target: 'net-topo' },
      { id: 'e-net-osi', source: 'net', target: 'net-osi' },
      { id: 'e-net-tcp', source: 'net', target: 'net-tcp' },
    ]
  },
  unit2: {
    nodes: [
      { id: 'root', type: 'input', data: { label: 'Unit 2: App Development' }, position: { x: 400, y: 50 }, style: { background: '#2563eb', color: 'white', fontWeight: 'bold', width: 220, padding: 15, borderRadius: 10 } },
      { id: 'sdlc', data: { label: 'SDLC Models' }, position: { x: 200, y: 150 }, style: { background: '#f3f4f6', border: '2px solid #2563eb', fontWeight: 'bold', borderRadius: 8 } },
      { id: 'db', data: { label: 'Database Concepts' }, position: { x: 600, y: 150 }, style: { background: '#f3f4f6', border: '2px solid #2563eb', fontWeight: 'bold', borderRadius: 8 } },
      
      { id: 'sdlc-agile', data: { label: 'Agile & Scrum' }, position: { x: 100, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      { id: 'sdlc-water', data: { label: 'Waterfall' }, position: { x: 300, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      
      { id: 'db-sql', data: { label: 'SQL (RDBMS)' }, position: { x: 500, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
      { id: 'db-nosql', data: { label: 'NoSQL' }, position: { x: 700, y: 250 }, style: { background: '#ffffff', border: '1px solid #d1d5db', borderRadius: 6 } },
    ],
    edges: [
      { id: 'e-root-sdlc', source: 'root', target: 'sdlc', animated: true, style: { stroke: '#2563eb', strokeWidth: 2 } },
      { id: 'e-root-db', source: 'root', target: 'db', animated: true, style: { stroke: '#2563eb', strokeWidth: 2 } },
      { id: 'e-sdlc-agile', source: 'sdlc', target: 'sdlc-agile' },
      { id: 'e-sdlc-water', source: 'sdlc', target: 'sdlc-water' },
      { id: 'e-db-sql', source: 'db', target: 'db-sql' },
      { id: 'e-db-nosql', source: 'db', target: 'db-nosql' },
    ]
  }
};
