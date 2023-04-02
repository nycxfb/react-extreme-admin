/**
 * @author nycxfb
 * @description:策略模式用于校验合法url
 */
export const validateURL = {
  urlRegex:
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,

  rule: function () {
    return this.urlRegex;
  },
  validate: function (url: string) {
    return this.urlRegex.test(url);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:39:55
 * @description:校验手机号码
 */
export const validateMobile = {
  phoneRegex: /^(1(3[0-9]|4[579]|5[012356789]|66|7[3678]|8[0-9]|9[89])[0-9]{8})$/,
  rule: function () {
    return this.phoneRegex;
  },
  validate: function (phone: string) {
    return this.phoneRegex.test(phone);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:39:37
 * @description:校验身份证
 */
export const validateCard = {
  idCardRegex: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  rule: function () {
    return this.idCardRegex;
  },
  validate: function (idCard: string) {
    return this.idCardRegex.test(idCard);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:40:30
 * @description:校验邮箱
 */
export const validateEmail = {
  mailRegex: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  rule: function () {
    return this.mailRegex;
  },
  validate: function (mail: string) {
    return this.mailRegex.test(mail);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:40:30
 * @description:校验车牌号
 */
export const validatePlateNumber = {
  plateRegex:
    /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/,
  rule: function () {
    return this.plateRegex;
  },
  validate: function (val: string) {
    return this.plateRegex.test(val);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:41:04
 * @description:验证非零的正实数,保留两位小数
 */
export const validateIntegral = {
  integralRegex: /^([+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/,
  rule: function () {
    return this.integralRegex;
  },
  validate: function (val: string) {
    return this.integralRegex.test(val);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:38:33
 * @description:校验小写字母
 */
export const validateLowerCase = {
  lowerRegex: /^[a-z]+$/,
  rule: function () {
    return this.lowerRegex;
  },
  validate: function (val: string) {
    return this.lowerRegex.test(val);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:38:58
 * @description:校验大写字母
 */
export const validateUpperCase = {
  uppercaseRegex: /^[A-Z]+$/,
  rule: function () {
    return this.uppercaseRegex;
  },
  validate: function (val: string) {
    return this.uppercaseRegex.test(val);
  }
};

/**
 * @author nycxfb
 * @date 2023-03-05 22:39:14
 * @description:校验大小写字母
 */
export const validateAlphabets = {
  alphabetsRegex: /^[A-Za-z]+$/,
  rule: function () {
    return this.alphabetsRegex;
  },
  validate: function (val: string) {
    return this.alphabetsRegex.test(val);
  }
};
