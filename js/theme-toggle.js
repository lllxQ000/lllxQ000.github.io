// 获取按钮和当前主题
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// 如果是暗夜模式，添加 .dark 类
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggleBtn.textContent = '🌞'; // 显示亮色模式图标
} else {
    document.body.classList.remove('dark');
    themeToggleBtn.textContent = '🌙'; // 显示暗夜模式图标
}

// 点击按钮切换模式
themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙';
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '🌞';
    }
});
