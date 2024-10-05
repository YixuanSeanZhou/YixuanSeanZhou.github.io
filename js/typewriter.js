typewriterPhrases = ["computer scientist.", "software engineer.", "life long learner.", "frisbee player."]
wordIndex = 0
wait = 1500
isDeleting = false
sub = ''

function typeWriter() {
	const word = typewriterPhrases[wordIndex % typewriterPhrases.length]
	sub = isDeleting ? word.substring(0, sub.length - 1) : word.substring(0, sub.length + 1)
	document.getElementById("typewriter").innerHTML = `<h2 class="text-primary mb-1 fw-light font-monospace">a ${sub}</h2>`
	
	let typeSpeed = 100
	if (isDeleting) {
		typeSpeed /= 3
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
