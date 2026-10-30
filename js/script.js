/**
 * ============================================================================
 * PORTFÓLIO MATEUS DE SOUZA SILVA RABETTI
 * Lógica Interativa e Animações Fluidas (JavaScript Puro / Vanilla JS)
 * ============================================================================
 */

(function () {
  'use strict';

  // Verifica preferências de movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------------------------
     1. SCROLL DO HEADER (EFEITO GLASSMORPHISM)
     -------------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');

  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* --------------------------------------------------------------------------
     2. MENU MOBILE RESPONSIVO
     -------------------------------------------------------------------------- */
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    if (!navMenu || !mobileToggleBtn) return;
    const isOpen = navMenu.classList.contains('open');

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    navMenu.classList.add('open');
    mobileToggleBtn.classList.add('open');
    mobileToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    mobileToggleBtn.classList.remove('open');
    mobileToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMobileMenu();
      }
    });
  });

  // Fecha o menu com a tecla ESC
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  /* --------------------------------------------------------------------------
     3. INTERSECTION OBSERVER: NAVEGAÇÃO ATIVA & SCROLL REVEAL
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window) {
    // 3.1. Destaque do link ativo no menu
    const navObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(section => navObserver.observe(section));

    // 3.2. Revelação suave de elementos (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if (!prefersReducedMotion) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.1
        }
      );

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  } else {
    // Fallback sem suporte a IntersectionObserver
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
  }

  /* --------------------------------------------------------------------------
     4. SPOTLIGHT DINÂMICO QUE SEGUE O CURSOR DO MOUSE
     -------------------------------------------------------------------------- */
  const mouseSpotlight = document.getElementById('mouse-spotlight');

  if (mouseSpotlight && !prefersReducedMotion && window.innerWidth > 1024) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateSpotlight);
      }
    }, { passive: true });

    function updateSpotlight() {
      // Interpolação linear suave (lerp)
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      mouseSpotlight.style.left = `${currentX}px`;
      mouseSpotlight.style.top = `${currentY}px`;

      if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
        requestAnimationFrame(updateSpotlight);
      } else {
        isMoving = false;
      }
    }
  }

  /* --------------------------------------------------------------------------
     5. ALTERNÂNCIA DE TELAS DOS PROJETOS (DESKTOP / GAMEPLAY / MOBILE)
     -------------------------------------------------------------------------- */
  const viewToggleButtons = document.querySelectorAll('.view-toggle-btn');

  viewToggleButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const parentCard = this.closest('.project-card');
      if (!parentCard) return;

      const targetImg = parentCard.querySelector('.project-image-wrapper img');
      const newSrc = this.getAttribute('data-src');
      if (!targetImg || !newSrc) return;

      // Atualiza botões ativos no grupo
      const siblingButtons = parentCard.querySelectorAll('.view-toggle-btn');
      siblingButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Transição suave de opacidade
      targetImg.style.opacity = '0.4';
      targetImg.style.transform = 'scale(0.98)';

      setTimeout(() => {
        targetImg.src = newSrc;
        targetImg.onload = () => {
          targetImg.style.opacity = '1';
          targetImg.style.transform = '';
        };
      }, 140);
    });
  });

  /* --------------------------------------------------------------------------
     6. MODAL DE GALERIA E PREVIEW AMPLIADO
     -------------------------------------------------------------------------- */
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalVisitLink = document.getElementById('modal-visit-link');
  const modalRepoLink = document.getElementById('modal-repo-link');

  function openProjectModal(data) {
    if (!modalOverlay || !modalImg) return;

    modalImg.src = data.imgSrc || '';
    modalImg.alt = `Captura do projeto ${data.title}`;
    if (modalTitle) modalTitle.textContent = data.title || 'Projeto';
    if (modalDesc) modalDesc.textContent = data.desc || '';

    if (modalVisitLink) {
      if (data.liveUrl) {
        modalVisitLink.href = data.liveUrl;
        modalVisitLink.style.display = 'inline-flex';
      } else {
        modalVisitLink.style.display = 'none';
      }
    }

    if (modalRepoLink) {
      if (data.repoUrl) {
        modalRepoLink.href = data.repoUrl;
        modalRepoLink.style.display = 'inline-flex';
      } else {
        modalRepoLink.style.display = 'none';
      }
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Disparadores para abrir o modal
  const expandButtons = document.querySelectorAll('.btn-expand-preview');
  expandButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const parentCard = this.closest('.project-card');
      if (!parentCard) return;

      const currentImg = parentCard.querySelector('.project-image-wrapper img');
      const title = parentCard.querySelector('.project-name')?.textContent || '';
      const desc = parentCard.querySelector('.project-description')?.textContent || '';
      const liveUrl = parentCard.querySelector('.btn-project-visit')?.getAttribute('href') || '';
      const repoUrl = parentCard.querySelector('.btn-project-repo')?.getAttribute('href') || '';

      openProjectModal({
        imgSrc: currentImg ? currentImg.src : '',
        title: title,
        desc: desc,
        liveUrl: liveUrl,
        repoUrl: repoUrl
      });
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* --------------------------------------------------------------------------
     7. CÓPIA RÁPIDA DO LINK DO GITHUB COM FEEDBACK VISUAL
     -------------------------------------------------------------------------- */
  const copyGithubBtn = document.getElementById('btn-copy-github');

  if (copyGithubBtn) {
    copyGithubBtn.addEventListener('click', async () => {
      const githubUrl = 'https://github.com/mateusrabetti';
      try {
        await navigator.clipboard.writeText(githubUrl);
        const originalText = copyGithubBtn.querySelector('.copy-text')?.textContent;
        copyGithubBtn.classList.add('copied');
        if (copyGithubBtn.querySelector('.copy-text')) {
          copyGithubBtn.querySelector('.copy-text').textContent = 'Copiado!';
        }

        setTimeout(() => {
          copyGithubBtn.classList.remove('copied');
          if (copyGithubBtn.querySelector('.copy-text')) {
            copyGithubBtn.querySelector('.copy-text').textContent = originalText || 'Copiar Link';
          }
        }, 2200);
      } catch (err) {
        console.error('Falha ao copiar:', err);
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. FORMULÁRIO DE CONTATO (VALIDAÇÃO E AVISO TRANSPARENTE)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const messageInput = document.getElementById('form-message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        if (formStatus) {
          formStatus.textContent = 'Por favor, preencha todos os campos obrigatórios.';
          formStatus.style.color = '#ef4444';
          formStatus.style.display = 'block';
        }
        return;
      }

      // Validação simples de formato de e-mail
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        if (formStatus) {
          formStatus.textContent = 'Por favor, insira um endereço de e-mail válido.';
          formStatus.style.color = '#ef4444';
          formStatus.style.display = 'block';
        }
        return;
      }

      // Feedback autêntico e transparente (conforme instrução 13 do documento)
      if (formStatus) {
        formStatus.innerHTML = `
          <strong>Mensagem validada!</strong> Como este portfólio está configurado em hospedagem estática, você também pode me contatar diretamente pelo GitHub em <a href="https://github.com/mateusrabetti" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: var(--accent-primary);">github.com/mateusrabetti</a>.
        `;
        formStatus.style.color = 'var(--accent-emerald)';
        formStatus.style.display = 'block';
      }

      contactForm.reset();
    });
  }

})();
