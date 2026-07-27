/* ============================================
   MARKETING STUDIO - JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Navbar Mobile Toggle --- */
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', function () {
      navbarToggle.classList.toggle('active');
      navbarLinks.classList.toggle('open');
    });

    /* Fechar menu ao clicar em um link */
    navbarLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbarToggle.classList.remove('active');
        navbarLinks.classList.remove('open');
      });
    });
  }

  /* --- Email Template Preview Toggle --- */
  const previewButtons = document.querySelectorAll('.btn-preview');

  previewButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target');
      const template = document.getElementById(targetId);

      if (!template) return;

      const isVisible = template.classList.contains('visible');

      /* Fechar todos os outros templates abertos */
      document.querySelectorAll('.email-preview.visible').forEach(function (open) {
        if (open.id !== targetId) {
          open.classList.remove('visible');
          /* Resetar texto do botão correspondente */
          const otherBtn = document.querySelector('[data-target="' + open.id + '"]');
          if (otherBtn) otherBtn.textContent = 'Visualizar';
        }
      });

      /* Toggle do template atual */
      if (isVisible) {
        template.classList.remove('visible');
        btn.textContent = 'Visualizar';
      } else {
        template.classList.add('visible');
        btn.textContent = 'Fechar';

        /* Scroll suave até o template */
        setTimeout(function () {
          template.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });

  /* --- Landing Page Editor - Atualização em Tempo Real --- */
  const editorTitle = document.getElementById('editor-title');
  const editorDescription = document.getElementById('editor-description');
  const editorBtnText = document.getElementById('editor-btn-text');

  const heroTitle = document.getElementById('lp-hero-title');
  const heroDescription = document.getElementById('lp-hero-description');
  const heroBtn = document.getElementById('lp-hero-btn');

  if (editorTitle && heroTitle) {
    editorTitle.addEventListener('input', function () {
      const value = editorTitle.value.trim();
      heroTitle.innerHTML = value
        ? value.replace(/(incr[íi]vel\w*)/gi, '<span>$1</span>')
        : 'Crie campanhas <span>incríveis</span>';
    });
  }

  if (editorDescription && heroDescription) {
    editorDescription.addEventListener('input', function () {
      heroDescription.textContent = editorDescription.value.trim() ||
        'Construa landing pages e e-mails profissionais sem precisar de desenvolvedores.';
    });
  }

  if (editorBtnText && heroBtn) {
    editorBtnText.addEventListener('input', function () {
      heroBtn.textContent = editorBtnText.value.trim() || 'Começar Agora';
    });
  }

  /* --- Formulário - Validação e Envio --- */
  const signupForm = document.getElementById('signup-form');
  const formMessage = document.getElementById('form-message');

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      /* Limpar estados anteriores */
      formMessage.className = 'form-message';
      formMessage.textContent = '';
      nameInput.classList.remove('error');
      emailInput.classList.remove('error');

      /* Validação */
      let hasError = false;

      if (!name) {
        nameInput.classList.add('error');
        hasError = true;
      }

      if (!email || !isValidEmail(email)) {
        emailInput.classList.add('error');
        hasError = true;
      }

      if (hasError) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
      }

      /* Sucesso */
      formMessage.className = 'form-message success';
      formMessage.textContent = 'Cadastro realizado com sucesso!';
      signupForm.reset();
    });
  }

  /* --- Validação de E-mail --- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* --- Animação de Clique nos Botões --- */
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.style.transform = 'scale(0.96)';
      setTimeout(function () {
        btn.style.transform = '';
      }, 150);
    });
  });

});
