const list = [
  {
    key: 'name',
    label: '姓名',
    type: 'input',
    checked: false
  },
  {
    key: 'age',
    label: '年龄',
    type: 'input',
    checked: false
  },
  {
    key: 'address',
    label: '地址',
    type: 'input',
    checked: false
  },
  {
    key: 'unit',
    label: '单位',
    type: 'input',
    checked: false
  },
  {
    key: 'marriage',
    label: '婚姻状况',
    type: 'select',
    checked: false,
    options: [
      { value: '0', label: '未婚' },
      { value: '1', label: '已婚' }
    ]
  },
  {
    key: 'loan',
    label: '是否贷款',
    type: 'select',
    checked: false,
    options: [
      { value: '0', label: '否' },
      { value: '1', label: '是' }
    ]
  },
  {
    key: 'children',
    label: '是否子女',
    type: 'select',
    checked: false,
    options: [
      { value: '0', label: '无' },
      { value: '1', label: '有' }
    ]
  },
  {
    key: 'birthdate',
    label: '出生日期',
    type: 'date',
    checked: false
  },
  {
    key: 'house',
    label: '有无房产',
    type: 'select',
    checked: false,
    options: [
      { value: '0', label: '无' },
      { value: '1', label: '有' }
    ]
  },
  {
    key: 'sex',
    label: '性别',
    type: 'select',
    checked: false,
    options: [
      { value: '0', label: '男' },
      { value: '1', label: '女' }
    ]
  },
  {
    key: 'credit',
    label: '信用评价',
    type: 'input',
    checked: false
  },
  {
    key: 'other',
    label: '其它说明',
    type: 'textarea',
    checked: false
  },
  {
    key: 'favourite',
    label: '个人爱好',
    type: 'input',
    checked: false
  },
  {
    key: 'ill',
    label: '有无疾病',
    type: 'select',
    checked: false,
    options: [
      { value: '0', label: '无' },
      { value: '1', label: '有' }
    ]
  },
  {
    key: 'explain',
    label: '个人说明',
    type: 'textarea',
    checked: false
  },
  {
    key: 'skill',
    label: '个人技能',
    type: 'radio',
    checked: false,
    options: [
      {
        value: 0,
        label: '前端'
      },
      {
        value: 1,
        label: '后端'
      },
      {
        value: 2,
        label: '产品'
      }
    ]
  },
  {
    key: 'past',
    label: '过往经历',
    type: 'textarea',
    checked: false
  },
  {
    key: 'range',
    label: '时间跨度',
    type: 'rangePicker',
    checked: false
  }
];

export { list };
