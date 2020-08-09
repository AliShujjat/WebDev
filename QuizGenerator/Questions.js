function getAllQuestions() {
	var json = [
		{
			category: "JavaScript",
			question: "&lt;script&gt; tag can be inserted under:",
			options: [
				{ option: "head and/or body" },
				{ option: "head" },
				{ option: "body" },
				{ option: "title" }
			]
		},
		{
			category: "JavaScript",
			question: "The correct JavaScript code to modify the contents of <span class=\"code\">&lt;div id=&quot;test&quot; /&gt;</span> is:",
			options: [
				{ option: "document.getElementById(\"test\").innerHTML = \"Hello World!\"" },
				{ option: "document.getElementsByTagName(\"DIV\").innerHTML = \"Hello World!\"" },
				{ option: "document.test.innerHTML = \"Hello World!\"" },
				{ option: "document.getElementById(\"test\").innerText = \"Hello World!\"" }
			]
		},
		{
			category: "JavaScript",
			question: "Which of the following is NOT a method to display data using JavaScript?",
			options: [
				{ option: "navigator.insertText()" },
				{ option: "console.log()" },
				{ option: "window.alert()" },
				{ option: "document.write()" }
			]
		},
		{
			category: "JavaScript",
			question: "When called from click handler of a button, the document.write() method will:",
			options: [
				{ option: "overwrite all of the existing HTML code" },
				{ option: "append to existing HTML" },
				{ option: "prepend to existing HTML" },
				{ option: "not work" }
			]
		},
		{
			category: "JavaScript",
			question: "To exit a for/while/do while loop, without exiting the function, one should use:",
			options: [
				{ option: "break" },
				{ option: "continue" },
				{ option: "exit" },
				{ option: "return" }
			]
		},
		{
			category: "JavaScript",
			question: "A switch-case in JavaScript can always be replaced with if-else.",
			options: [
				{ option: "True" },
				{ option: "False" }
			]
		},
		{
			category: "JavaScript",
			question: "JavaScript programmers tend to use ______ case that starts with ________ letter:",
			options: [
				{ option: "camel, lowercase" },
				{ option: "pascal, uppercase" },
				{ option: "upper, uppercase" },
				{ option: "lower, lowercase" }
			]
		},
		{
			category: "JavaScript",
			question: "Multi-line comments in JavaScript are enclosed within",
			options: [
				{ option: "/* and */" },
				{ option: "&lt!-- and --&gt;" },
				{ option: "//" },
				{ option: "rem" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the value of c after the execution of the following JavaScript code block?<br><span class=\"code\">var a = 10, b = \"20\", c = a + b;</span><br>",
			options: [
				{ option: "1020" },
				{ option: "10" },
				{ option: "20" },
				{ option: "30" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the value of variables <i>a</i> and <i>b</i> after the execution of the following JavaScript code block?<br><span class=\"code\">var a = 10, b = a--;</span><br>",
			options: [
				{ option: "9, 10" },
				{ option: "10, 9" },
				{ option: "10, 10" },
				{ option: "9, 9" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the output shown in console after the following JavaScript code block is executed?<br><span class=\"code\">var x = {id:10, name:\"Id #10\"};<br>console.log(typeof x);</span><br>",
			options: [
				{ option: "object" },
				{ option: "array" },
				{ option: "null" },
				{ option: "undefined" }
			]
		},
		{
			category: "JavaScript",
			question: "onclick, onmouseover, and onkeydown are examples of:",
			options: [
				{ option: "JavaScript Events" },
				{ option: "Mouse Events" },
				{ option: "Keyboard Events" },
				{ option: "JavaScript Objects" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the output shown in console after the following JavaScript code block is executed?<br><span class=\"code\">var s1 = \"Value\", s2 = new String(s1);<br>console.log(s1 === s2);</span><br>",
			options: [
				{ option: "false" },
				{ option: "true" },
				{ option: "[object]" },
				{ option: "An error will be displayed" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the output shown in console after the following JavaScript code block is executed?<br><span class=\"code\">var s = \"Locate 'locate'!\";<br>console.log(s.indexOf(\"locate\"));</span><br>",
			options: [
				{ option: "8" },
				{ option: "0" },
				{ option: "-1" },
				{ option: "9" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the output shown in console after the following JavaScript code block is executed?<br><span class=\"code\">var s = \"0123456789\";<br>console.log(s.slice(-7, -3));</span><br>",
			options: [
				{ option: "3456" },
				{ option: "789" },
				{ option: "567" },
				{ option: "0123" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the values of variables <i>a</i> and <i>b</i> after the following JavaScript code block is executed?<br><span class=\"code\">var x = 12.3456, a = x.toPrecision(3), b = x.toFixed(3);</span><br>",
			options: [
				{ option: "12.3, 12.346" },
				{ option: "12.346, 12.346" },
				{ option: "12.4, 12.345" },
				{ option: "12.346, 12.3" }
			]
		},
		{
			category: "JavaScript",
			question: "Determine the order of values in the following array after the sort() method is called. Hint: By default, the Array.sort() function sorts values as strings.<br><span class=\"code\">var arr = [390, 45, 8, 39];</span><br>",
			options: [
				{ option: "39, 390, 45, 8" },
				{ option: "45, 390, 39, 8" },
				{ option: "8, 39, 45, 390" },
				{ option: "390, 45, 39, 8" }
			]
		},
		{
			category: "JavaScript",
			question: "Determine the length of array variable <i>filtered</i> in the following code.<br><span class=\"code\">var arr = [12, 34, 27, 99, 145, 210];<br>var filtered = arr.filter(function(v) { return v % 3 == 0 });</span><br>",
			options: [
				{ option: "4" },
				{ option: "6" },
				{ option: "0" },
				{ option: "1" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the value of n after the following JavaScript code block is executed? Hint: Keep in mind today\'s date!<br><span class=\"code\">var n = new Date().getDay();</span><br>",
			options: [
				{ option: "4" },
				{ option: "6" },
				{ option: "0" },
				{ option: "1" }
			]
		},
		{
			category: "JavaScript",
			question: "What will be the output shown in console after the following JavaScript code block is executed?<br><span class=\"code\">var x = 2;<br>console.log(x !== \"2\");</span><br>",
			options: [
				{ option: "true" },
				{ option: "false" },
				{ option: "undefined" },
				{ option: "null" }
			]
		},
		{
			category: "jQuery",
			question: "jQuery is a lightweight, \"write less, do more\", JavaScript ______.",
			options: [
				{ option: "library" },
				{ option: "architecture" },
				{ option: "algorithm" },
				{ option: "framework" }
			]
		},
		{
			category: "jQuery",
			question: "Which of the following is NOT a valid jQuery feature?",
			options: [
				{ option: "String manipulation" },
				{ option: "HTML/DOM manipulation" },
				{ option: "CSS manipulation" },
				{ option: "Effects and animations" }
			]
		},
		{
			category: "jQuery",
			question: "Which of the following is NOT a valid example of a jQuery selector?",
			options: [
				{ option: "$(\"@attributeOfAnElement\")" },
				{ option: "$(\".testclass\")" },
				{ option: "$(\"#idOfAnElement\")" },
				{ option: "$(\"div\")" }
			]
		},
		{
			category: "jQuery",
			question: "To cancel a keystroke in a textbox using jQuery, the user could do which of the following in a jQuery keypress event handler?",
			options: [
				{ option: "return false;" },
				{ option: "return -1;" },
				{ option: "throw an exception" },
				{ option: "event.keyCode = 0;" }
			]
		},
		{
			category: "jQuery",
			question: "What will the jQuery code <span class=\"code\">$(\".button\").hide();</span> do?",
			options: [
				{ option: "Hide all elements with class=\"button\"" },
				{ option: "Hide all elements with id=\"button\"" },
				{ option: "Hide all button elements" },
				{ option: "Hide all input elements with type=\"button\"" }
			]
		},
		{
			category: "jQuery",
			question: "The second parameter of jQuery slideUp, slideDown and slideToggle is ________?",
			options: [
				{ option: "a callback function" },
				{ option: "speed" },
				{ option: "a boolean flag" },
				{ option: "undefined" }
			]
		},
		{
			category: "jQuery",
			question: "To change the height of an HTML element, we could use jQuery ________ function.",
			options: [
				{ option: "animate" },
				{ option: "toggle" },
				{ option: "slideDown" },
				{ option: "fadeOut" }
			]
		},
		{
			category: "jQuery",
			question: "What is the correct jQuery code to find the type of an input element?",
			options: [
				{ option: "$(\"input\").attr(\"type\")" },
				{ option: "$(\"input\").type()" },
				{ option: "$(\"input@type\")" },
				{ option: "$(\"input\").getAttribute(\"type\")" }
			]
		},
		{
			category: "jQuery",
			question: "What is the correct jQuery code to get the content (including HTML markup) of an element with class=\"test\"?",
			options: [
				{ option: "$(\".test\").html()" },
				{ option: "$(\".test\").text()" },
				{ option: "$(\".test\").content()" },
				{ option: "$(\".test\").toString()" }
			]
		},
		{
			category: "jQuery",
			question: "What is the correct jQuery code to get the text content (without HTML markup) of an element with class=\"test\"?",
			options: [
				{ option: "$(\".test\").text()" },
				{ option: "$(\".test\").html()" },
				{ option: "$(\".test\").content()" },
				{ option: "$(\".test\").val()" }
			]
		},
		{
			category: "jQuery",
			question: "What is the correct jQuery code to set the content of a DIV with id=\"test\" to string &quot;Hello World!&quot; (shown in <b>bold</b>)?",
			options: [
				{ option: "$(\"#test\").html(\"&lt;b&gt;Hello World!&lt;/b&gt;\")" },
				{ option: "$(\"#test\").text(\"&lt;b&gt;Hello World!&lt;/b&gt;\")" },
				{ option: "$(\"#test\").val(\"&lt;b&gt;Hello World!&lt;/b&gt;\")" },
				{ option: "$(\"#test\").content(\"&lt;b&gt;Hello World!&lt;/b&gt;\")" }
			]
		},
		{
			category: "jQuery",
			question: "Using jQuery css() method, what is the preferred way to set border and color of a DIV element with id=\"test\"?",
			options: [
				{ option: "$(\"#test\").css({ border: \"1px\"; color: \"red\"; })" },
				{ option: "$(\"#test\").css(\"border\", \"1px\").css(\"color\", \"red\");)" },
				{ option: "$(\"#test\").css(\"border\", \"1px\"); $(\"#test\").css(\"color\", \"red\");)" },
				{ option: "$(\"#test\").style.border = \"1px\"; $(\"#test\").style.color = \"red\"; })" }
			]
		},
		{
			category: "jQuery",
			question: "When trying to set multiple style declarations for HTML elements, using jQuery addClass() method is preferable over css() method.",
			options: [
				{ option: "True" },
				{ option: "False" },
				{ option: "Both are same" },
				{ option: "It depends on exact scenario" }
			]
		}
	];
	
	return json;
}