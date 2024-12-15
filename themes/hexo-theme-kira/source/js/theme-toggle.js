// 获取切换按钮和 <html> 元素
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 初始化，从本地存储获取主题
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// 监听按钮点击事件
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // 切换主题
  htmlElement.setAttribute('data-theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  // 保存主题到本地存储
  localStorage.setItem('theme', newTheme);
});
