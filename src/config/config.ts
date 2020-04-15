export const config = {
  shortenUrlBase: 'https://s.bidwin.top/api/v1/shorten',
  wechatWorkHost: 'https://qyapi.weixin.qq.com',
  template: {
    github: '[github]\n\n'+
            'repository:<%= repository.full_name %>\n\n'+
            '<%= pusher.name %> pushed on branch <%= ref %> with the following commit(s):\n\n'+
            '<% _.forEach(commits, function(c) { %>[<%= c.id.substr(0, 7) %>] <%= c.message %>\n\n<% }); %>'
  }
}