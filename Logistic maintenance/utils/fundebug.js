var r = {}, o = 5, t, n;

r.notifyError = function (e) {
  if (e && o && !r.silent) {
    o-- , n = { e: e, t: (new Date).getTime(), n: "0.0.3" };
    for (t in r) "notifyError" !== t && (n[t] = r[t]);
    wx.request({
      url: "https://fundebug.com/wxjs/",
      method: "POST", data: n
    })
  }
},

  App({
    onError: function (o) {
      r.notifyError(o)
    }
  }),
  module.exports = r;