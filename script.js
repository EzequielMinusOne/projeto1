// Banco de dados de informações dos chefes
const bossInfo = {
  'Blast Hornet': {
    description: 'Um Maverick voador com poderosos ataques explosivos. Fraqueza: Escudo de Gelo',
    location: 'Fábrica de Aeronaves',
    weapon: 'Bomba Parasita'
  },
  'Blizzard Buffalo': {
    description: 'Um poderoso Maverick baseado em gelo. Fraqueza: Explosão Ácida',
    location: 'Base na Neve',
    weapon: 'Escudo de Gelo'
  },
  'Gravity Beetle': {
    description: 'Controla a gravidade com tecnologia avançada. Fraqueza: Trovão Tríade',
    location: 'Laboratório de Gravidade',
    weapon: 'Poço Gravitacional'
  },
  'Toxic Seahorse': {
    description: 'Utiliza ataques ácidos mortais. Fraqueza: Lâmina Giratória',
    location: 'Fábrica Tóxica',
    weapon: 'Explosão Ácida'
  },
  'Volt Catfish': {
    description: 'Gera poderosos ataques elétricos. Fraqueza: Presa Tornado',
    location: 'Usina de Energia',
    weapon: 'Trovão Tríade'
  },
  'Crush Crawfish': {
    description: 'Armado com poderosas garras esmagadoras. Fraqueza: Dispersor de Raios',
    location: 'Estaleiro',
    weapon: 'Lâmina Giratória'
  },
  'Tunnel Rhino': {
    description: 'Especialista em perfuração e combate subterrâneo. Fraqueza: Bomba Parasita',
    location: 'Base Subterrânea',
    weapon: 'Presa Tornado'
  },
  'Neon Tiger': {
    description: 'Rápido e ágil com ataques laser. Fraqueza: Poço Gravitacional',
    location: 'Parque Safari',
    weapon: 'Dispersor de Raios'
  }
};

// Função para mostrar informações do chefe
function showBossInfo(bossName) {
  const infoDiv = document.getElementById('boss-info');
  const boss = bossInfo[bossName];
  
  infoDiv.innerHTML = `
    <h3>${bossName}</h3>
    <p><strong>Descrição:</strong> ${boss.description}</p>
    <p><strong>Localização:</strong> ${boss.location}</p>
    <p><strong>Arma Especial:</strong> ${boss.weapon}</p>
  `;
  
  infoDiv.style.display = 'block';
}

// Rolagem suave para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Adiciona classe de animação às seções quando elas entram na vista
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(section);
});