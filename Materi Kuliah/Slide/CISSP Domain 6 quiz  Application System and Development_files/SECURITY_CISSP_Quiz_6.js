var quiz = {
	questions : [
		{
			text : 'The act of two different objects responding to the same command in different ways is called what?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Abstraction',
				'B.	Object reuse',
				'C.             Polymorphism',
				'D.	Polyinstantiation'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<br>\nPolymorphism is a characteristic of object-oriented programming, which allows two different objects to react differently to the same message. The objects behave differently depending upon their types and inheritance from their classes.',
			moreInfo : ''
		},
		{
			text : 'Gathering and uncovering restricted information by using permissible data is referred to as __________.',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Aggregation',
				'B.	Data mining',
				'C.	Perturbation',
				'D.	Cell suppression'
			],
			answer : 0,
			score : 1,
			expandedAnswer : '<br>\nAggregation and inference go hand-in-hand. For example, a user who uses data from a public database in order to figure out classified information is exercising aggregation and can then infer the relationship between that data and the data he does not have access to. This is called an inference attack.',
			moreInfo : ''
		},
		{
			text : 'Unit testing is performed in what phase of the software development lifecycle?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Acceptance testing/Implementation',
				'B.	Operations/Maintenance',
				'C.	System design specifications',
				'D.	Software development'
			],
			answer : 3,
			score : 1,
			expandedAnswer : '<br>\nUnit testing is part of the software development phase. This phase involves the actual code writing by the developers and the developers testing their own code.  Part of code writing is doing unit testing as different milestones are reached throughout the process.',
			moreInfo : ''
		},
		{
			text : 'Generation One of program languages includes which of the following?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Machine language',
				'B.	Assembly language',
				'C.	Object-oriented language',
				'D.	Artificial intelligence'
			],
			answer : 0,
			score : 1,
			expandedAnswer : '<br>\nComputer programming has gone through many generations of growth.  Generation One is the earliest stage and offers the lowest levels of functionality.  Below is the list of programming generations: \n<ul><li>One - Machine language</li>\n<li>Two - Assembly language</li>\n<li>Three - High-level language</li>\n<li>Four - Very high-level language</li>\n<li>Five - Artificial intelligence and natural language</li></ul>',
			moreInfo : ''
		},
		{
			text : 'Computer programs that are based on human logic by using  "if/then statements" and inference engines are called _________.',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	ANN',
				'B.	Artificial expert systems',
				'C.	Expert systems',
				'D.	ActiveX'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<br>\nExpert systems are built on the foundation of human logic. The programs use a knowledge base that is filled with information from subject matter experts. The decision-making process involves "if/then" statements and an inference engine.',
			moreInfo : ''
		},
		{
			text : 'What is CORBA?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	A design framework for applications written in Java',
				'B.	A standard to allow communications between programs written in different languages and platforms',
				'C.	A Microsoft model aimed at allowing objects to communicate with objects on different computers',
				'D.             An object-oriented programming language developed by Sun Microsystems'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<br>\nCommon Object Request Broker Architecture (CORBA) is a standard that enables objects to communicate with one another regardless of their programming language or platform type. CORBA was created by the Object Management Group (OMG).',
			moreInfo : ''
		},
		{
			text : 'Polyinstantiation is a technique that is used in databases to thwart what type of threat?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Collusion',
				'B.	Inference',
				'C.	Traffic analysis',
				'D.	Zero proof knowledge'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<br>\nPolyinstantiation means that a copy of an object is made and the characteristics of the second object are modified in some way. Within databases this technique can be used to allow more than one row to contain the same primary key and different classifications.',
			moreInfo : ''
		},
		{
			text : 'A processor can work in different modes. If it is working in \'supervisor\' mode, what does that mean?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	It cannot accept software or hardware interrupts',
				'B.	It is working at a lower privilege than user mode',
				'C.	It has access to privileged and non-privileged instruction',
				'D.	It is computing non-privileged instructions'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<br>\nA processor can be executing applications in user mode, which is a lower privilege mode than supervisor mode (also called privileged mode). The processor will execute instructions in this mode to ensure that rogue code does not access sensitive and critical system resources. A processor can execute in supervisor mode. This usually takes place when a process of high system privilege sends a request to the processor. If the processor is in supervisor mode, it has access to user-level (non-privileged) and supervisor (privileged) code.',
			moreInfo : ''
		},
		{
			text : 'Your company has several applications that rely on each other for information and processes. Several of the systems use different programming languages, so each has adhered to a CORBA framework. When one system sends a request to an object on another system, what component does the request actually go to?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	EJB',
				'B.	ORB',
				'C.	COM',
				'D.	Active X'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<br>\nPlatforms using the CORBA standards use object request brokers (ORB) to allow client\\server software to communicate to each other. So, when a client sends a request to the server portion of the software, the message first goes to the ORB. The ORB is responsible for knowing where the server software is located and sending the request to it.',
			moreInfo : ''
		},
		{
			text : 'Applications and operating systems have several vulnerabilities that can be used for attacks. Knowing these weaknesses is the job of security professionals. One attack is when one process modulates its resource as a way of communicating to another process. What is this called?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Overt timing channel',
				'B.	Covert timing channel',
				'C.	Overt storage channel',
				'D.	Covert storage channel'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<br>\nCovert channels are ways that attackers can allow processes to use items for communication. The items were not developed and used for communication purposes in this way. A covert channel is the act of using an unintended communication path to send and receive messages. An overt channel is using a communication path that was intended for communication.',
			moreInfo : ''
		},
		{
			text : 'The Capability Maturity Model has five maturity levels that can be assigned to software development companies after a certification process. Which of the following lists the correct five levels?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Initial, Repeatable, Qualified, Managed, Optimizing',
				'B.	Initial, Repeatable, Defined, Managed, Optimizing',
				'C.	Initial, Repeatable, Defined, Managed, Custom',
				'D.	Initial, Non-repeatable, Defined, Managed, Optimizing'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<br>\nThere are five maturity levels used: \n<ul><li>Initial -- development process is ad hoc or even chaotic. The company does not use effective management procedures and plans. No assurance of consistency and quality is unpredictable.</li>\n<li>Repeatable -- A formal management structure, change control, and quality assurance is in place. The company can properly repeat processes throughout each project. The company does not have formal process model defined.</li>\n<li>Defined -- Formal procedures are in place that outline and define processes that are carried out in each project. The organization has a way to allow for quantitative process improvement.</li>\n<li>Managed -- The company has formal processes in place to collect and analyze qualitative data, and metrics are defined and fed into the process improvement program.</li> \n<li>Optimizing -- The company has budged and integrated plans for continuous process improvement.</li></ul>',
			moreInfo : ''
		},
		{
			text : 'A company hires a software development company to create a customized application. The software development company suggests that a software escrow should be set up. What does this mean?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	The source code is split up and held at three different agencies to enforce separation of duties.',
				'B.	The source code is split up and held at two different agencies to enforce separation of duties.',
				'C.	A third party will keep a copy of the source code to protect the software developer.',
				'D.	A third party will keep a copy of the source code to protect the customer.'
			],
			answer : 3,
			score : 1,
			expandedAnswer : '<br>\nSoftware escrow means that there is a third party involved. This third party will keep a copy of the source code, and possibly other materials, which will only be released to the customer if specific circumstances arrive, mainly if the vendor who developed the code goes out of business or for some reason is not meeting its obligations and responsibilities. This is put into place to protect the customer, because it has paid for this source code to be developed.',
			moreInfo : ''
		},
		{
			text : 'When multiple database exchange transactions take place, each database is updated. This can happen many times and in many different ways. To protect the integrity of the data, databases should incorporate a concept known as an ACID test. What does this acronym stand for?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Availability, Confidentiality, Integrity, Durability',
				'B.	Availability, Consistency, Integrity, Durability',
				'C.	Atomicity, Confidentiality, Isolation, Durability',
				'D.	Atomicity, Consistency, Isolation, Durability'
			],
			answer : 3,
			score : 1,
			expandedAnswer : '<br>\nThe ACID test concept should be incorporated into the software of a database. ACID means:\n<ul><li>Atomicity -- transactions are divided into units of work, ensuring that all modifications take effect or none take effect. The changes are either committed or the database is rolled back.</li>\n<li>Consistency -- a transaction must follow the integrity policy developed for that particular database and ensure that all data is consistent in the different databases.</li>\n<li>Isolation -- transactions execute in isolation until completed, without interacting with other transactions. The results of the modification are not available until the transaction is completed.</li>\n<li>Durability -- once the transaction is verified as accurate on all systems it is committed and the databases cannot be rolled back.</li></ul>',
			moreInfo : ''
		},
		{
			text : 'Which of the following best describes the differences between object-oriented databases and relational databases?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Relational databases are more dynamic than object-oriented databases, and the objects contain the procedures within them.',
				'B.	Object-oriented databases are more dynamic than relational databases, and the objects contain the procedures within them.',
				'C.	Object-oriented databases are more dynamic than relational databases, and the relational tables contain the procedures that interact with the objects.',
				'D.	Relational databases are more dynamic than object-oriented databases, and the objects abstract the procedures from the applications.'
			],
			answer : 1,
			score : 1,
			expandedAnswer : '<br>\nAn object-oriented database is more dynamic in nature when compared to a relational database because objects can be created when needed and the data and procedure go with the object when it is requested. In a relational database an application uses its procedures to obtain data from the database, the database does not actually provide procedures as object-oriented databases do. The object-oriented database has classes to define the attributes and procedures of its objects.',
			moreInfo : ''
		},
		{
			text : 'Distributed applications can be written in Java. Which of the following describes the Java structural design used for developing these types of applications?',
			img : 'http://media.techtarget.com/WhatIs/images/spacer.gif',
			responses : [
				'A.	Enterprise Java Bean (EJB) dictates the protocols, components, and platforms that have to be implemented to allow different applications to communicate in a distributed environment.',
				'B.	Enterprise Knowledge-based System (EKS) dictates the interfaces that have to be implemented to allow different applications to communicate in a distributed environment.',
				'C.	Enterprise Java Bean (EJB) dictates the interfaces that have to be implemented to allow different applications to communicate in a distributed environment.',
				'D.	Enterprise Java Bean (EJB) dictates the applets that have to be implemented to allow different applications to communicate in a single, centralized system.'
			],
			answer : 2,
			score : 1,
			expandedAnswer : '<br>\nEnterprise Java Bean (EJB) is a structural design for the development and implementation of distributed applications written in Java. The EJB provides interfaces and methods to allow different applications to be able to communicate across a networked environment. Java is a multi-platform language. The applications are not tied to specific protocols.',
			moreInfo : ''
		}
	]
};