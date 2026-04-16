window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    
    // Add fade-in animation to elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
          entry.target.style.transition = 'all 0.8s ease';
          
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', function() {

// Method selector functionality with buttons
const methodButtons = document.querySelectorAll('.method-btn');
if (methodButtons.length > 0) {
	methodButtons.forEach(button => {
		button.addEventListener('click', function() {
			const selectedMethod = this.getAttribute('data-method');
			const comparisonVideo = document.getElementById('comparison-video');
			const comparisonSource = document.getElementById('comparison-source');
			const methodLabel = document.getElementById('method-label');
			
			// Remove active class from all buttons
			methodButtons.forEach(btn => btn.classList.remove('active'));
			
			// Add active class to clicked button
			this.classList.add('active');
			
			// Update video source
			const newSrc = `asset/videos/${selectedMethod}_entering.mp4`;
			comparisonSource.src = newSrc;
			comparisonVideo.load();
			comparisonVideo.play();
			
			// Update label
			methodLabel.textContent = selectedMethod.toUpperCase();
		});
	});
}

document.querySelectorAll('.slider-container').forEach(container => {
	const bottomVideo = container.querySelector('.bottom-video');
	const topVideo = container.querySelector('.top-video');
	const slider = container.querySelector('.slider');
	let isDragging = false;
	let containerRect = null;

	// Cache container rect for performance
	function updateContainerRect() {
	  containerRect = container.getBoundingClientRect();
	}

	// 更新滑块位置和上层视频裁剪 - 优化版本
	function updateClipPath(clientX) {
	  if (!containerRect) updateContainerRect();
	  
	  const clipX = Math.max(0, Math.min(clientX - containerRect.left, containerRect.width));
	  const clipRight = containerRect.width - clipX;
	  
	  // Use transform instead of left for better performance
	  slider.style.transform = `translateX(${clipX}px)`;
	  topVideo.style.clipPath = `inset(0 ${clipRight}px 0 0)`;
	}

	// 同步视频播放时间
	function syncVideos() {
	  const timeDiff = Math.abs(bottomVideo.currentTime - topVideo.currentTime);
	  if (timeDiff > 0.1) {
		topVideo.currentTime = bottomVideo.currentTime;
	  }
	}

	// 确保两个视频同时播放或暂停
	function syncPlayState() {
	  if (bottomVideo.paused && !topVideo.paused) {
		  bottomVideo.play();
	  } else if (!bottomVideo.paused && topVideo.paused) {
		  bottomVideo.pause();
	  }
	}

	// 减少同步频率
	setInterval(() => {
	  syncVideos();
	  syncPlayState();
	}, 250);

	// 滑块拖动事件
	slider.addEventListener('mousedown', (e) => {
	  isDragging = true;
	  updateContainerRect();
	  e.preventDefault();
	});

	slider.addEventListener('touchstart', (e) => {
	  isDragging = true;
	  updateContainerRect();
	  e.preventDefault();
	}, { passive: false });

	// 全局鼠标/触摸移动事件 - 直接更新，不使用 RAF
	document.addEventListener('mousemove', (e) => {
	  if (isDragging) {
		updateClipPath(e.clientX);
	  }
	});

	document.addEventListener('touchmove', (e) => {
	  if (isDragging) {
		updateClipPath(e.touches[0].clientX);
	  }
	}, { passive: true });

	// 停止拖动
	document.addEventListener('mouseup', () => {
	  isDragging = false;
	});

	document.addEventListener('touchend', () => {
	  isDragging = false;
	});

	// 视频加载完成后初始化同步
	bottomVideo.addEventListener('loadedmetadata', () => {
	  topVideo.currentTime = bottomVideo.currentTime;
	});

	// 窗口大小变化时更新滑块位置
	let resizeTimeout;
	window.addEventListener('resize', () => {
	  clearTimeout(resizeTimeout);
	  resizeTimeout = setTimeout(() => {
	    updateContainerRect();
	    updateClipPath(containerRect.left + containerRect.width / 2);
	  }, 100);
	});

	// 初始化滑块位置
	updateContainerRect();
	updateClipPath(containerRect.left + containerRect.width / 2);
  });

  // Custom Carousel Functionality
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextButton = document.querySelector('.carousel-button--right');
  const prevButton = document.querySelector('.carousel-button--left');
  
  if (track && slides.length > 0 && nextButton && prevButton) {
    let currentIndex = 0;

    const getSlideWidth = () => {
      return slides[0].getBoundingClientRect().width;
    };

    const moveToSlide = (index) => {
      const slideWidth = getSlideWidth();
      track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
      slides.forEach(slide => slide.classList.remove('current-slide'));
      slides[index].classList.add('current-slide');
    };

    const updateButtons = () => {
      if (currentIndex === 0) {
        prevButton.classList.add('is-hidden');
      } else {
        prevButton.classList.remove('is-hidden');
      }

      if (currentIndex === slides.length - 1) {
        nextButton.classList.add('is-hidden');
      } else {
        nextButton.classList.remove('is-hidden');
      }
    };

    // Next button
    nextButton.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        moveToSlide(currentIndex);
        updateButtons();
      }
    });

    // Previous button
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(currentIndex);
        updateButtons();
      }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      moveToSlide(currentIndex);
    });

    // Initial setup
    moveToSlide(0);
    updateButtons();
  }
});