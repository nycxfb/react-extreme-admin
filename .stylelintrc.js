module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-hex-case': 'lower', // 颜色值小写
    'comment-empty-line-before': 'never', // 注释前无须空行
    'font-weight-notation': null, // 使用数字或命名的 (可能的情况下) font-weight 值
    'function-comma-newline-after': null, // 在函数的逗号之后要求有一个换行符或禁止有空白
    'function-parentheses-newline-inside': null, // 在函数的括号内要求有一个换行符或禁止有空白
    'function-url-quotes': 'always', // url使用引号
    'string-quotes': 'single', // 字符串使用单引号
    indentation: 4, // 缩进
    'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-empty-source': null, // 禁止空源
    'no-missing-end-of-source-newline': null, // 禁止缺少文件末尾的换行符
    'selector-pseudo-class-no-unknown': null,
    ' no-invalid-double-slash-comments': null,
    ' property-no-unknown': null,
    'selector-class-pattern': null
  }
};
