// ===== 学术英语写作 · 交互脚本 =====

// 1) 开放题：显示/隐藏参考答案（先做后看）
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.answer-toggle');
  if (!btn) return;
  const ans = btn.nextElementSibling;
  if (!ans || !ans.classList.contains('answer')) return;
  const shown = ans.classList.toggle('show');
  btn.textContent = shown ? '隐藏参考答案' : '显示参考答案';
});

// 2) 单选 / 判断题：点击选项即时判分（data-quiz="mc" 或 "tf"）
//    正确选项加属性 data-correct
document.addEventListener('click', function (e) {
  const opt = e.target.closest('.quiz[data-quiz] .opt');
  if (!opt) return;
  const quiz = opt.closest('.quiz');
  if (quiz.classList.contains('done')) return;        // 已作答则锁定
  quiz.classList.add('done');
  const isRight = opt.hasAttribute('data-correct');
  opt.classList.add(isRight ? 'right' : 'wrong');
  if (!isRight) {
    // 高亮正确答案
    const correct = quiz.querySelector('.opt[data-correct]');
    if (correct) correct.classList.add('reveal');
  }
  const ex = quiz.querySelector('.explain');
  if (ex) ex.classList.add('show');
});

// 3) 匹配 / 填空 / 排序题：下拉选择 + 检查按钮（data-quiz="check"）
//    每个 <select> 上写 data-correct="正确值"
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.check-btn');
  if (!btn) return;
  const quiz = btn.closest('.quiz');
  const sels = quiz.querySelectorAll('select[data-correct]');
  let right = 0;
  sels.forEach(function (s) {
    s.classList.remove('right', 'wrong');
    const ok = s.value && s.value === s.dataset.correct;
    s.classList.add(ok ? 'right' : 'wrong');
    if (ok) right++;
  });
  let score = quiz.querySelector('.score');
  if (!score) {
    score = document.createElement('div');
    score.className = 'score';
    btn.after(score);
  }
  score.textContent = `✓ 答对 ${right} / ${sels.length} 题`;
  score.className = 'score ' + (right === sels.length ? 'all' : 'part');
  const ex = quiz.querySelector('.explain');
  if (ex) ex.classList.add('show');
});
