var quiz = {
	questions : [
		{
			text : '<p>CHAPTER 1: Which of the following best describes the relationship between CobiT and ITIL?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. CobiT is a model for IT governance, whereas ITIL is a model for corporate governance.',
				'B. CobiT provides a corporate governance roadmap, whereas ITIL is a customizable framework for IT service management.',
				'C. CobiT defines IT goals, whereas ITIL provides the process-level steps on how to achieve them.',
				'D. CobiT provides a framework for achieving security goals, whereas ITIL defines a framework for achieving IT service-level goals.'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<p><b>Answer: C.</b> The Control Objectives for Information and related Technology (CobiT) is a framework developed by the Information Systems Audit and Control Association (ISACA) and the IT Governance Institute (ITGI). It defines goals for the controls that should be used to properly manage IT and ensure IT maps to business needs, not specifically just security needs. The Information Technology Infrastructure Library (ITIL) is the de facto standard of best practices for IT service management. A customizable framework, ITIL provides the goals, the general activities necessary to achieve these goals, and the input and output values for each process required to meet these determined goals. In essence, CobiT addresses "what is to be achieved," while ITIL addresses "how to achieve it."</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because, while CobiT can be used as a model for IT governance, ITIL is not a model for corporate governance. Actually, Committee of Sponsoring Organizations of the Treadway Commission (COSO) is a model for corporate governance. CobiT is derived from the <a href="http://www.coso.org/">COSO framework</a>. You can think of CobiT as a way to meet many of the COSO objectives, but only from the IT perspective. In order to achieve many of the objectives addressed in CobiT, an organization can use ITIL, which provides process-level steps for achieving IT service management objectives.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because, as previously stated, CobiT can be used as a model for IT governance, not corporate governance. COSO is a model for corporate governance. The second half of the answer is correct. ITIL is a customizable framework that is available as a series of books or online, for IT service management.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because CobiT defines goals for the controls that should be used to properly manage IT and ensure IT maps to business needs, not just IT security needs. ITIL provides steps for achieving IT service management goals as they relate to business needs. ITIL was created because of the increased dependence on information technology to meet business needs.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 2: Which of the following does not correctly describe a directory service?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. It manages objects within a directory by using namespaces.',
				'B. It enforces security policy by carrying out access control and identity management functions.',
				'C. It assigns namespaces to each object in databases that are based on the X.509 standard and are accessed by LDAP.',
				'D. It allows an administrator to configure and manage how identification takes place within the network.'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<p><b>Answer: C.</b> Most enterprises have some type of directory that contains information pertaining to the company\'s network resources and users. Most directories follow a hierarchical database format, based on the X.500 standard (not X.509), and a type of protocol, as in Lightweight Directory Access Protocol (LDAP), that allows subjects and applications to interact with the directory. Applications can request information about a particular user by making an LDAP request to the directory, and users can request information about a specific resource by using a similar request. A directory service assigns distinguished names (DNs) to each object in databases based on the X.500 standard that are accessed by LDAP. Each distinguished name represents a collection of attributes about a specific object and is stored in the directory as an entry.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because objects within hierarchical databases are managed by a directory service. The directory service allows an administrator to configure and manage how identification, authentication, authorization, and access control take place within the network. The objects within the directory are labeled and identified with namespaces, which is how the directory service keeps the objects organized.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because directory services do enforce the configured security policy by carrying out access control and identity management functions. For example, when a user logs into a domain controller in a Windows environment, the directory service (Active Directory) determines what network resources she can and cannot access.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because directory services do allow an administrator to configure and manage how identification takes place within the network. It also allows for the configuration and management of authentication, authorization, and access control.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 3: Lacy\'s manager has tasked her with researching an intrusion detection system for a new dispatching center. Lacy identifies the top five products and compares their ratings. Which of the following are the evaluation criteria most in use today for these types of purposes?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. ITSEC',
				'B. Common Criteria',
				'C. Red Book',
				'D. Orange Book'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<p><b>Answer: B.</b> The Common Criteria were created in the early 1990s as a way of combining the strengths of both the Trusted Computer System Evaluation Criteria (TCSEC) and Information Technology Security Evaluation Criteria (ITSEC) while eliminating their weaknesses. These evaluation criteria are more flexible than TCSEC and more straightforward than ITSEC. Because it is recognized globally, the Common Criteria help consumers by reducing the complexity of the ratings and eliminating the need to understand the definition and meaning of different ratings within various evaluation schemes. This also helps manufacturers because now they can build to one specific set of requirements if they want to sell their products internationally, instead of having to meet several different ratings with varying rules and requirements.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because ITSEC, or the Information Technology Security Evaluation Criteria, is not the most widely used. ITSEC was the first attempt at establishing a single standard for evaluating security attributes of computer systems and products by many European countries. Furthermore, ITSEC separates functionality and assurance in its evaluation, giving each a separate rating. It was developed to provide more flexibility than TCSEC, and addresses integrity, availability, and confidentiality in networked systems. While the goal of the ITSEC was to become the worldwide criteria for product evaluation, it did not meet that goal and has been replaced with the Common Criteria.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because the Red Book is a U.S. government publication that addresses security evaluation topics for networks and network components. Officially titled the Trusted Network Interpretation, the book provides a framework for securing different types of networks. Subjects accessing objects on the network need to be controlled, monitored, and audited.</i></p> \n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because the Orange Book is a U.S. government publication that primarily addresses government and military requirements and expectations for operating systems. The Orange Book is used to evaluate whether a product contains the security properties the vendor claims it does and whether the product is appropriate for a specific application or function. The Orange Book is used to review the functionality, effectiveness, and assurance of a product during its evaluation, and it uses classes that were devised to address typical patterns of security requirements. It provides a broad framework for building and evaluating trusted systems with great emphasis on controlling which users can access a system. The other name for the Orange Book is the Trusted Computer System Evaluation Criteria (TCSEC).</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 4: Robert has been given the responsibility of installing doors that provide different types of protection. He has been told to install doors that provide fail-safe, fail-secure, and fail-soft protection. Which of the following statements is true about secure door types?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. Fail-soft defaults to the sensitivity of the area.',
				'B. Fail-safe defaults to locked.',
				'C. Fail-secure defaults to unlocked.',
				'D. Fail-secure defaults to double locked.'
			],
			answer : 0,
			score : 1,
			expandedAnswer : '<p><b>Answer: A.</b> Doorways with automatic locks can be configured to be fail-secure, fail-safe, or fail-soft. Fail-soft means that locks need to default to being locked or unlocked, depending on the sensitivity of the data and systems in an area, and if people are working in specific areas of the building. The objective of a fail-soft system is to fail in a way that preserves as much data and capability as possible.</p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because fail-safe does not default to locked. A fail-safe setting means that if a power disruption occurs that affects the automated locking system, the doors default to being unlocked. Fail-safe deals directly with protecting people. If people work in an area and there is a fire or the power is lost, it is not a good idea to lock them in.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because fail-secure does not default to unlocked. A fail-secure configuration means that the doors default to being locked if there are any problems with the power. Be careful not to confuse fail-secure with fail-safe. You can think of it this way: If a fail-secure lock fails, the door is secure; i.e., the door is locked. If a fail-safe lock fails, then the people it protects are safe because they can leave through the door.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because fail-secure does not default to double locked. The doors simply lock if there are problems with the power in a fail-secure configuration.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 5: Layer 2 of the OSI model has two sublayers. What are those sublayers, and what are two IEEE standards that describe technologies at that layer?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. LCL and MAC; IEEE 802.2 and 802.3',
				'B. LCL and MAC; IEEE 802.1 and 802.3',
				'C. Network and MAC; IEEE 802.1 and 802.3',
				'D. LLC and MAC; IEE E 802.2 and 802.3'
			],
			answer : 3,
			score : 1,
			expandedAnswer : '<p><b>Answer: D.</b> The data link layer, or Layer 2, of the OSI model is responsible for adding a header and a trailer to a packet to prepare the packet for the local area network or wide area network technology binary format for proper line transmission. Layer 2 is divided into two functional sublayers. The upper sublayer is the Logical Link Control (LLC) and is defined in the IEEE 802.2 specification. It communicates with the network layer, which is immediately above the data link layer. Below the LLC is the Media Access Control (MAC) sublayer, which specifies the interface with the protocol requirements of the physical layer. Thus, the specification for this layer depends on the technology of the physical layer. The IEEE MAC specification for Ethernet is 802.3, Token Ring is 802.5, wireless LAN is 802.11, and so on. When you see a reference to an IEEE standard, such as 802.11 or 802.16, it refers to the protocol working at the MAC sublayer of the data link layer of the protocol stack.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because LCL is a distracter. The correct acronym for the upper sublayer of the data link layer is LLC. It stands for the Logical Link Control. By providing multiplexing and flow control mechanisms, the LLC enables the coexistence of network protocols within a multipoint network and their transportation over the same network media.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because LCL is a distracter. The sublayers of the data link layer are the Logical Link Control (LLC) and the Media Access Control (MAC). Furthermore, the LLC is defined in the IEEE 802.2 specification, not 802.1. The IEEE 802.1 specifications are concerned with protocol layers above the MAC and LLC layers. It addresses LAN/MAN architecture, network management, internetworking between LANs and WANs, and link security, etc.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because network is not a sublayer of the data link layer. The sublayers of the data link layer are the Logical Link Control (LLC) and the Media Access Control (MAC). The LLC sits between the network layer (the layer immediately above the data link layer) and the MAC sublayer. Also, the LLC is defined in the IEEE 802.2 specification, not IEEE 802.1. As just explained, 802.1 standards address areas of LAN/MAN architecture, network management, internetworking between LANs and WANs, and link security. The IEEE 802.1 group\'s four active task groups are Internetworking, Security, Audio/Video Bridging, and Data Center Bridging.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 6: There are several components involved with steganography. Which of the following refers to a file that has hidden information in it?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. Stego-medium',
				'B. Concealment cipher',
				'C. Carrier',
				'D. Payload'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<p><b>Answer: C.</b> Steganography is a method of hiding data in another media type so that the very existence of the data is concealed. Only the sender and receiver are supposed to be able to see the message because it is secretly hidden in a graphic, wave file, document, or other type of media. The message is not necessarily encrypted, just hidden. Encrypted messages can draw attention because it tells the bad guy, "This is something sensitive." A message hidden in a picture would not attract this type of attention, even though the exact same secret message can be embedded into this image. Steganography is a type of security through obscurity. The components involved with steganography are the carrier, stego-medium, and payload. The carrier is a signal, data stream, or file that has hidden information inside of it. In other words, it carries the payload.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because the stego-medium is the medium in which the information is hidden in steganography. If the message were held within a graphic, the stego-medium could be JPEG or TIFF. If the message were embedded within a file, the stego-medium could be a Word document. A stego-medium can be a graphic type, wave file type, document type, or other type of media.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because a concealment cipher is a type of steganography method that involves putting a message within a message. It is a way to hide a secret message within something familiar from the world around us. This answer does not specify a specific component of steganography but is a specific type of steganography.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because the payload is the information that is to be concealed and transported through the use of steganography. The payload is the actual information that the sender wants to keep secret.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 7: The NIST organization has defined best practices for creating continuity plans. Which of the following phases deals with identifying and prioritizing critical functions and systems?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. Identify preventive controls.',
				'B. Develop the continuity planning policy statement.',
				'C. Develop recovery strategies.',
				'D. Conduct the business impact analysis.'
			],
			answer : 3,
			score : 1,
			expandedAnswer : '<p><b>Answer: D.</b> Although no specific scientific equation must be followed to create continuity plans, certain best practices have proven themselves over time. The National Institute of Standards and Technology (NIST) organization is responsible for developing many of these best practices and documenting them so that they are easily available to all. NIST outlines seven steps in its Special Publication 800-34, <i>Continuity Planning Guide for Information Technology Systems</i>: develop the continuity planning statement; conduct the business impact analysis; identify preventive controls; develop recovery strategies; develop the contingency plan; test the plan and conduct training and exercises; and maintain the plan. Conducting a business impact analysis involves identifying critical functions and systems, and allowing the organization to prioritize them based on necessity. It also includes identifying vulnerabilities and threats, and calculating risks.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because identifying preventive controls must be done after critical functions and systems have been prioritized, and their vulnerabilities, threats, and risks identified -- which is all part of the business impact analysis. Conducting a business impact analysis is step two of creating a continuity plan, and identifying preventive controls is step three.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because developing the continuity planning policy statement involves writing a policy that provides the guidance necessary to develop a business continuity plan and that assigns authority to the necessary roles to carry out these tasks. It is the first step in creating a business continuity plan and thus comes before identifying and prioritizing critical systems and functions, which is part of the business impact analysis.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because developing recovery strategies involves formulating methods to ensure systems and critical functions can be brought online quickly. Before this can be done, a business impact analysis must be carried out to determine which systems and functions are critical and should be given priority during recovery.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 8: Cyberlaw categorizes computer-related crime into three categories. Which of the following is an example of a crime in which the use of a computer would be categorized as incidental?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. Carrying out a buffer overflow to take control of a system',
				'B. The electronic distribution of child pornography',
				'C. Attacking financial systems to steal funds',
				'D. Capturing passwords as they are sent to the authentication server'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<p><b>Answer: B.</b> Laws have been created to combat three categories of crime: computer-assisted, computer-targeted, and computer is incidental. If a crime falls into the "computer is incidental" category, this means a computer just happened to be involved in some secondary manner, but its involvement is insignificant. The digital distribution of child pornography is an example of "computer is incidental." The actual crime is obtaining and sharing child pornography pictures or graphics. The pictures could be stored on a file server, or they could be kept in a physical file in someone\'s desk. So, if a crime falls within this category, the computer is not attacking another computer, and a computer is not being attacked, but the computer is still used in some manner. Thus, the computer is a source of additional evidence related to the crime.\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because carrying out a buffer overflow to take control of a system is an example of a computer-targeted crime. A computer-targeted crime concerns incidents where a computer was the victim of an attack crafted to harm it (and its owners) specifically. Other examples of computer-targeted crimes include distributed denial-of-service attacks, installing malware with the intent to cause destruction, and installing rootkits and sniffers for malicious purposes.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because attacking financial systems to steal funds is an example of a computer-assisted crime. A computer-assisted crime is where a computer was used as a tool to help carry out a crime. Other examples of computer-assisted crimes include obtaining military and intelligence material by attacking military systems, and carrying out information warfare activities by attacking critical national infrastructure systems.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because capturing passwords as they are sent to the authentication server is an example of a computer-targeted crime. Some confusion typically exists between the two categories, "computer-assisted crimes" and "computer-targeted crimes," because intuitively it would seem any attack would fall into both of these categories. One way to look at it is that a computer-targeted crime could not take place without a computer, while a computer-assisted crime could. Thus, a computer-targeted crime is one that did not, and could not, exist before computers became of common use. In other words, in the good old days, you could not carry out a buffer overflow on your neighbor, or install malware on your enemy\'s system. These crimes require that computers be involved.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 9: Data marts, databases, and data warehouses have distinct characteristics. Which of the following does not correctly describe a data warehouse?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. It could increase the risk of privacy violations.',
				'B. It is developed to carry out analysis.',
				'C. It contains data from several different sources.',
				'D. It is created and used for project-based tactical reasons.'
			],
			answer : 3,
			score : 1,
			expandedAnswer : '<p><b>Answer: D.</b> A data warehouse is not commonly created and used for project-based tactical reasons. That description is characteristic of a data mart, which is a portion of a database that is used for a short period of time mainly for projects to determine tactical approaches to a problem. A data warehouse, on the other hand, is created for the purpose of conducting data mining and analysis for strategic reasons.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because data warehouses could increase the risk of privacy violations considering that data is collected from several different sources and is held in one central location (the warehouse). Although this provides easier access and control, because the data warehouse is in one place, it also requires more stringent security. If an intruder got into the data warehouse, she could access all of the company\'s information at once.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>B</b> is incorrect because the statement is true; data warehouses are commonly created for the purpose of analysis. The analysis allows for strategic decisions to be made; for example, those related to business trends, fraudulent activities, or marketing effectiveness. The analysis work is commonly carried out through data mining activities.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because a data warehouse does contain data from several different sources. Data is extracted from different databases and other data locations, transferred to a central data storage place called a warehouse, and normalized. This enables users to query a single entity rather than accessing and querying different data sources, and allows for more efficient information retrieval and data analysis.</i></p>',
			moreInfo : ''
		},
		{
			text : '<p>CHAPTER 10: Which of the following is not a common component of configuration management change control steps?</p>',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A. Tested and presented',
				'B. Service-level agreement approval',
				'C. Report change to management',
				'D. Approval of the change'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<p><b>Answer: B.</b> A well-structured change management process should be established to aid staff members through many different types of changes to the environment. This process should be laid out in the change control policy. Although the types of changes vary, a standard list of procedures can help keep the process under control and ensure it is carried out in a predictable manner. A change control policy should include procedures for requesting a change to take place, approving the change, documentation of the change, testing and presentation, implementation, and reporting the change to management. Configuration management change control processes do not commonly have an effect on service-level agreement approvals.</p>\n<p style=" margin-left: 40.0px;"><i><b>A</b> is incorrect because testing and presentation should be included in a standard change control policy. All changes must be fully tested to uncover any unforeseen results. Depending on the severity of the change and the company\'s organization, the change and implementation may need to be presented to a change control committee. This helps show different sides to the purpose and outcome of the change and the possible ramifications.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>C</b> is incorrect because a procedure for reporting a change to management should be included in a standard change control policy. After a change is implemented, a full report summarizing the change should be submitted to management. This report can be submitted on a periodic basis to keep management up to date and ensure continual support.</i></p>\n<p style=" margin-left: 40.0px;"><i><b>D</b> is incorrect because a procedure for obtaining approval for the change should be included in a standard change control policy. The individual requesting the change must justify the reasons and clearly show the benefits and possible pitfalls of the change. Sometimes the requester is asked to conduct more research and provide more information before the change is approved.</i><p>',
			moreInfo : ''
		}
	]
};