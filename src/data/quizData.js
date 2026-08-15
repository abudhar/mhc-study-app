export const quizData = {
  1: [
    { question: "Which of the following describes a Local Area Network (LAN)?", options: ["A network that spans across multiple cities.", "A network confined to a single room, building or campus.", "A global public network connecting millions of computers.", "A network specifically used for mobile phones."], answer: 1, explanation: "A LAN connects computers and devices in a limited geographical area such as a home, school, or office building." },
    { question: "In the OSI model, which layer is responsible for physical addressing?", options: ["Transport Layer", "Network Layer", "Data Link Layer", "Physical Layer"], answer: 2, explanation: "The Data Link Layer is responsible for physical addressing (MAC addresses), error detection, and frame delivery." },
    { question: "What is the standard port for HTTP?", options: ["21", "25", "80", "443"], answer: 2, explanation: "Port 80 is used for unencrypted HTTP traffic, while 443 is used for HTTPS." }
  ],
  2: [
    { question: "Which feature is a core characteristic of the Linux operating system?", options: ["It is exclusively developed by Microsoft.", "It is an open-source operating system.", "It does not support networking.", "It only has a graphical user interface (no command line)."], answer: 1, explanation: "Linux is famous for being a free, open-source operating system." },
    { question: "What is the primary function of an Operating System?", options: ["To compile source code", "To provide a web browser", "To manage hardware and software resources", "To edit images"], answer: 2, explanation: "An OS acts as an intermediary between the user of a computer and the computer hardware." },
    { question: "Which command is used in Linux to list directory contents?", options: ["dir", "list", "ls", "show"], answer: 2, explanation: "The 'ls' command is used in Unix/Linux to list the contents of a directory." }
  ],
  3: [
    { question: "Which protocol is used to securely transfer files over a network?", options: ["FTP", "HTTP", "SFTP", "Telnet"], answer: 2, explanation: "SFTP (SSH File Transfer Protocol) provides file access, transfer, and management over a secure SSH data stream." },
    { question: "What does IP stand for in TCP/IP?", options: ["Internet Protocol", "Internal Protocol", "Intranet Protocol", "Information Protocol"], answer: 0, explanation: "IP stands for Internet Protocol, which routes data packets across networks." },
    { question: "Which OS uses the NTFS file system by default?", options: ["Linux", "macOS", "Windows", "Android"], answer: 2, explanation: "NTFS (New Technology File System) is the proprietary file system developed by Microsoft for Windows." }
  ],
  4: [
    { question: "In Software Development Life Cycle (SDLC), what phase comes after Requirements Analysis?", options: ["Testing", "Design", "Deployment", "Maintenance"], answer: 1, explanation: "Once requirements are analyzed, the system design phase begins to architect the solution." },
    { question: "Which programming paradigm uses objects and classes?", options: ["Functional Programming", "Procedural Programming", "Object-Oriented Programming", "Logic Programming"], answer: 2, explanation: "OOP uses objects (instances of classes) to design applications and computer programs." },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Integration", "Automated Programming Interface", "Application Process Integration"], answer: 0, explanation: "API is a set of rules that allows different software entities to communicate with each other." }
  ],
  5: [
    { question: "Which of these is a popular Agile framework?", options: ["Waterfall", "Scrum", "V-Model", "Spiral"], answer: 1, explanation: "Scrum is an iterative and incremental Agile software development framework." },
    { question: "What is the main purpose of version control software like Git?", options: ["To compress files", "To compile code", "To track changes in source code", "To deploy applications"], answer: 2, explanation: "Version control systems record changes to a file or set of files over time so you can recall specific versions." },
    { question: "Which language is primarily used for Android app development natively?", options: ["Swift", "Kotlin", "C#", "Ruby"], answer: 1, explanation: "Kotlin (along with Java) is the official language for Android native development." }
  ],
  6: [
    { question: "What is a 'Bug' in software development?", options: ["A hardware component", "A feature request", "An error or flaw in the code", "A security feature"], answer: 2, explanation: "A bug is an error, flaw, or fault in a computer program that causes it to produce an incorrect or unexpected result." },
    { question: "Which testing methodology tests the internal structures or workings of an application?", options: ["Black-box testing", "White-box testing", "Acceptance testing", "Beta testing"], answer: 1, explanation: "White-box testing looks at the internal workings (code) of an application, as opposed to black-box testing which only looks at inputs and outputs." },
    { question: "What does IDE stand for?", options: ["Integrated Development Environment", "Internal Design Engine", "Interactive Debugging Environment", "Intelligent Deployment Entity"], answer: 0, explanation: "An IDE provides comprehensive facilities to computer programmers for software development." }
  ],
  7: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], answer: 0, explanation: "HTML is the standard markup language for documents designed to be displayed in a web browser." },
    { question: "Which technology is used to style web pages?", options: ["HTML", "JavaScript", "CSS", "SQL"], answer: 2, explanation: "Cascading Style Sheets (CSS) is used for describing the presentation of a document written in HTML." },
    { question: "What is the role of JavaScript in web development?", options: ["To define the structure of a page", "To style the page", "To add interactivity and logic", "To host the website"], answer: 2, explanation: "JavaScript is the programming language of the Web, allowing for complex and interactive features." }
  ],
  8: [
    { question: "Which HTTP method is typically used to retrieve data from a server?", options: ["POST", "GET", "PUT", "DELETE"], answer: 1, explanation: "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data." },
    { question: "What does DNS stand for?", options: ["Dynamic Network System", "Domain Name System", "Digital Node Server", "Data Name Service"], answer: 1, explanation: "DNS translates human-readable domain names (like www.google.com) to machine-readable IP addresses." },
    { question: "What is a REST API?", options: ["A protocol for sending emails", "An architectural style for designing networked applications", "A database management system", "A programming language"], answer: 1, explanation: "REST (Representational State Transfer) is an architectural style used for web services." }
  ],
  9: [
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Standard Output Network", "JavaScript Output Node", "Java Source Open Network"], answer: 0, explanation: "JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate." },
    { question: "Which tag is used in HTML to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<nav>"], answer: 1, explanation: "The <a> (anchor) tag defines a hyperlink, which is used to link from one page to another." },
    { question: "In CSS, how do you select an element with id 'header'?", options: [".header", "header", "#header", "*header"], answer: 2, explanation: "The # symbol is used to select elements by their ID attribute in CSS." }
  ],
  10: [
    { question: "Which command initializes a new Git repository?", options: ["git start", "git init", "git new", "git create"], answer: 1, explanation: "The 'git init' command creates a new, empty Git repository or reinitializes an existing one." },
    { question: "What is Docker primarily used for?", options: ["Database management", "Containerization", "Code compilation", "UI design"], answer: 1, explanation: "Docker is an open platform for developing, shipping, and running applications in containers." },
    { question: "In software testing, what is Unit Testing?", options: ["Testing the entire system as a whole", "Testing individual components or functions in isolation", "Testing the UI layout", "Testing the database performance"], answer: 1, explanation: "Unit testing involves testing individual units of source code to determine if they are fit for use." }
  ],
  11: [
    { question: "What does CI/CD stand for?", options: ["Continuous Integration / Continuous Deployment", "Code Inspection / Code Delivery", "Centralized Integration / Centralized Deployment", "Continuous Iteration / Continuous Design"], answer: 0, explanation: "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development." },
    { question: "Which tool is commonly used for CI/CD?", options: ["Photoshop", "Jenkins", "Word", "Excel"], answer: 1, explanation: "Jenkins is a popular open-source automation server that enables developers around the world to reliably build, test, and deploy their software." },
    { question: "What is a 'pull request' (PR)?", options: ["A request to delete a repository", "A proposed change to a repository submitted by a developer", "A command to download files", "A network error"], answer: 1, explanation: "A pull request is a mechanism for a developer to notify team members that they have completed a feature." }
  ],
  12: [
    { question: "What is the purpose of a debugger?", options: ["To write code faster", "To identify and remove errors from computer hardware or software", "To compile code", "To design user interfaces"], answer: 1, explanation: "Debuggers allow programmers to execute their code step by step and inspect variables to find bugs." },
    { question: "Which of the following is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: 2, explanation: "MongoDB is a document-oriented NoSQL database program, unlike the others which are relational (SQL)." },
    { question: "What does SQL stand for?", options: ["Structured Question Language", "System Query Language", "Structured Query Language", "Simple Query Language"], answer: 2, explanation: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system." }
  ],
  13: [
    { question: "What does SaaS stand for in Cloud Computing?", options: ["Software as a Service", "System as a Server", "Storage as a Service", "Security as a Service"], answer: 0, explanation: "SaaS allows users to connect to and use cloud-based apps over the Internet (e.g., email, calendaring)." },
    { question: "Which of the following is a major Cloud Service Provider?", options: ["AWS (Amazon Web Services)", "Adobe", "Intel", "Cisco"], answer: 0, explanation: "AWS is one of the leading cloud platforms offering over 200 fully featured services." },
    { question: "What characterizes IaaS (Infrastructure as a Service)?", options: ["Providing just the application software", "Providing virtualized computing resources over the internet", "Providing a platform for developers", "Providing physical hardware to the user's home"], answer: 1, explanation: "IaaS provides fundamental compute, network, and storage resources on demand." }
  ],
  14: [
    { question: "What is 'Cloud Elasticity'?", options: ["The ability to stretch ethernet cables", "The degree to which a system is able to adapt to workload changes by provisioning and de-provisioning resources", "The physical flexibility of servers", "A pricing model"], answer: 1, explanation: "Elasticity ensures that the cloud infrastructure dynamically scales to match the current demand." },
    { question: "Which term describes a cloud environment that combines public and private clouds?", options: ["Multi-cloud", "Hybrid cloud", "Community cloud", "Distributed cloud"], answer: 1, explanation: "A hybrid cloud uses a mix of on-premises, private cloud and third-party, public cloud services." },
    { question: "What is a 'Serverless' architecture?", options: ["An architecture with no physical servers anywhere", "An execution model where the cloud provider dynamically manages the allocation of machine resources", "A completely offline application", "A peer-to-peer network"], answer: 1, explanation: "In serverless, servers still exist, but the provider manages them so developers don't have to." }
  ],
  15: [
    { question: "What is a CDN?", options: ["Central Data Network", "Content Delivery Network", "Cloud Distribution Node", "Compute Delivery Network"], answer: 1, explanation: "A CDN is a geographically distributed group of servers which work together to provide fast delivery of Internet content." },
    { question: "Which cloud service model would a developer use to deploy a web application without managing the underlying OS?", options: ["IaaS", "SaaS", "PaaS", "DBaaS"], answer: 2, explanation: "PaaS (Platform as a Service) provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure." },
    { question: "What is a virtual machine (VM)?", options: ["A physical computer", "An emulation of a computer system", "A network router", "A type of database"], answer: 1, explanation: "A VM is a software-based emulation of a physical computer." }
  ],
  16: [
    { question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?", options: ["Queue", "Array", "Stack", "Tree"], answer: 2, explanation: "A stack is a linear data structure that follows the LIFO principle." },
    { question: "What is the time complexity of binary search?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: 2, explanation: "Binary search halves the search space at each step, resulting in logarithmic time complexity." },
    { question: "What is polymorphism in OOP?", options: ["Hiding data", "The ability of different objects to respond to the same method call in their own way", "Inheriting attributes from a parent", "Creating an object"], answer: 1, explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass." }
  ],
  17: [
    { question: "In a relational database, what is a Primary Key?", options: ["A key that decrypts data", "A unique identifier for a record in a table", "The first column in a table", "A password for the database"], answer: 1, explanation: "A primary key is a specific choice of a minimal set of attributes that uniquely specify a tuple (row) in a relation (table)." },
    { question: "What does normalization do in a database?", options: ["Increases data redundancy", "Reduces data redundancy and improves data integrity", "Encrypts the data", "Sorts the data alphabetically"], answer: 1, explanation: "Normalization involves structuring a relational database to reduce data redundancy and improve data integrity." },
    { question: "Which join returns all rows from the left table, and the matched rows from the right table?", options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL OUTER JOIN"], answer: 2, explanation: "A LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table." }
  ],
  18: [
    { question: "What is a firewall?", options: ["A physical wall to prevent server fires", "A network security system that monitors and controls incoming and outgoing network traffic", "A type of computer virus", "An operating system"], answer: 1, explanation: "Firewalls establish a barrier between a trusted network and an untrusted network, such as the Internet." },
    { question: "What is encryption?", options: ["Deleting data", "The process of encoding information so that only authorized parties can access it", "Compressing files", "Translating code into machine language"], answer: 1, explanation: "Encryption secures digital data using one or more mathematical techniques, along with a password or 'key'." },
    { question: "Which attack overloads a server with traffic to make it unavailable?", options: ["Phishing", "SQL Injection", "DDoS (Distributed Denial of Service)", "Man-in-the-Middle"], answer: 2, explanation: "A DDoS attack aims to disrupt normal traffic of a targeted server, service or network by overwhelming the target." }
  ],
  19: [
    { question: "What is an Algorithm?", options: ["A programming language", "A step-by-step procedure or formula for solving a problem", "A type of hardware", "A database engine"], answer: 1, explanation: "In computer science, an algorithm is a finite sequence of well-defined, computer-implementable instructions." },
    { question: "Which sorting algorithm is generally considered the fastest for large datasets?", options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Quick Sort / Merge Sort"], answer: 3, explanation: "Quick Sort and Merge Sort typically have O(n log n) time complexity, making them much faster than O(n^2) algorithms like Bubble Sort." },
    { question: "What is a hash table?", options: ["A wooden table for computers", "A data structure that implements an associative array abstract data type", "A type of network switch", "A CSS layout module"], answer: 1, explanation: "A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found." }
  ],
  20: [
    { question: "What is the most important thing to bring to the exam hall?", options: ["Your smartphone", "Your Hall Ticket and valid ID", "A textbook", "A calculator"], answer: 1, explanation: "The Hall Ticket and a valid photo ID are mandatory for entry into the exam hall." },
    { question: "If you encounter a difficult question during the exam, what is the best strategy?", options: ["Spend 30 minutes trying to solve it", "Skip it and come back to it later", "Guess randomly immediately", "Give up and leave"], answer: 1, explanation: "Time management is crucial; skipping difficult questions to secure easy marks first is a proven strategy." },
    { question: "What type of pen is usually allowed for OMR sheets?", options: ["Red ink pen", "Pencil only", "Black or Blue ballpoint pen", "Highlighter"], answer: 2, explanation: "Standard exams usually require a black or blue ballpoint pen to correctly fill OMR sheets." }
  ],
  21: [
    { question: "Mock Test Question: Which OSI layer handles routing?", options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], answer: 1, explanation: "The Network layer is responsible for packet forwarding including routing through intermediate routers." },
    { question: "Mock Test Question: What is the output of 10 % 3 in most programming languages?", options: ["3.33", "3", "1", "0"], answer: 2, explanation: "The modulo operator (%) returns the remainder of a division. 10 divided by 3 leaves a remainder of 1." },
    { question: "Mock Test Question: Which HTTP status code indicates 'Not Found'?", options: ["200", "404", "500", "403"], answer: 1, explanation: "404 Not Found indicates that the server cannot find the requested resource." }
  ],
  22: [
    { question: "Final Review: What is the primary difference between TCP and UDP?", options: ["TCP is connectionless, UDP is connection-oriented", "TCP is connection-oriented and reliable, UDP is connectionless and faster", "TCP is used for videos, UDP for emails", "They are identical"], answer: 1, explanation: "TCP guarantees delivery of data and that packets will be delivered in the same order in which they were sent. UDP does not." },
    { question: "Final Review: Which JavaScript keyword is used to declare a variable that cannot be reassigned?", options: ["var", "let", "const", "static"], answer: 2, explanation: "The const keyword creates a read-only reference to a value." },
    { question: "Final Review: What is the main advantage of using a Cloud CDN?", options: ["It provides unlimited database storage", "It reduces latency by serving content from edge locations close to the user", "It prevents all hacking attempts", "It compiles code faster"], answer: 1, explanation: "By caching content at network edges, CDNs dramatically improve load times for users geographically distant from the origin server." }
  ]
};
