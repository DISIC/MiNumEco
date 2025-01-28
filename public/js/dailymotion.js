document.addEventListener("DOMContentLoaded", function () {
	const videoContainers = document.querySelectorAll(".responsive-video-container");

	videoContainers.forEach(container => {
		container.addEventListener("click", () => {
			const videoId = container.getAttribute("data-video-id");
			const iframe = document.createElement("iframe");

			iframe.setAttribute("src", `https://www.dailymotion.com/embed/video/${videoId}?autoplay=1`);
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allow", "autoplay; fullscreen");
			iframe.setAttribute("allowfullscreen", "true");

			// Appliquer les dimensions de manière responsives
			iframe.style.position = "absolute";
			iframe.style.top = "0";
			iframe.style.left = "0";
			iframe.style.width = "100%";
			iframe.style.height = "100%";

			// Remplacer le contenu du conteneur
			container.innerHTML = "";
			container.appendChild(iframe);
		});
	});
});
