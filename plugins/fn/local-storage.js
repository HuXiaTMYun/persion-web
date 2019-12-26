import Vue from 'vue';

const moment = require('moment');

// 默认失效时间
const default_invalid_time = 2 * 60;
Vue.prototype.$localStorage = {
  // 默认失效时间
  getItem: (key) => {
    let data = localStorage.getItem(key);
    console.info('get ', data);
    if (!data) {
      return null;
    }
    data = JSON.parse(data);
    let { content, invalid_time, record_date } = data;
    invalid_time = parseInt(invalid_time);
    record_date = moment(record_date);
    const moment_date = moment();
    // 计算时间差是否大于设置的invalid_time
    // 如果大于那么就是超时，返回空。
    let diffSeconds = moment_date.diff(record_date, 'seconds');
    return diffSeconds >= invalid_time ? null : content;
  },
  setItem: ({ key, value, invalid_time }) => {
    if (!invalid_time) {
      invalid_time = default_invalid_time;
    }
    let data = {
      content: value,
      invalid_time: invalid_time,
      record_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    localStorage.setItem(key, JSON.stringify(data));
  },
};




