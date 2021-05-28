typewriterPhrases = ["computer scientist.", "software engineer.", "student.", "researcher.", "frisbee player."]
wordIndex = 0
wait = 1500
isDeleting = false
sub = ''

function typeWriter() {
	const word = typewriterPhrases[wordIndex % typewriterPhrases.length]
	sub = isDeleting ? word.substring(0, sub.length - 1) : word.substring(0, sub.length + 1)
	document.getElementById("typewriter").innerHTML = `<span class="type">a ${sub}</span>`
	
	let typeSpeed = 200
	if (isDeleting) {
		typeSpeed /= 2
	}

	if (!isDeleting && sub == word) {
		typeSpeed = wait
		isDeleting = true
	} else if (isDeleting && sub == '') {
		isDeleting = false
		wordIndex++
		typeSpeed = 500
	}
	
	setTimeout(() => typeWriter(), typeSpeed)
}
typeWriter()
