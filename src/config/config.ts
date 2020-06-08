export const config = {
  shortenUrlBase: 'https://s.bidwin.top/api/v1/shorten',
  wechatWorkHost: 'https://qyapi.weixin.qq.com',
  template: {
    github: {
      issue: `
\nissue标题: <%= title %>
\nissue内容: <%= content %>
\nissue地址: <%= url %>
\n仓库: <%= repository %>
\n操作: issue <%= action %>
\n操作人: <%= actionLogin %>
      `,
      issueComment: `
\nissue标题: <%= title %>
\nissue内容: <%= content %>
\nissue地址: <%= url %>
\nissueComment内容: <%= commentContent %>
\nissueComment地址: <%= commentUrl %>
\n仓库: <%= repository %>
\n操作: issue comment <%= action %>
\n操作人: <%= actionLogin %>
      `,
      create: `
<%= actionLogin %> 在 <%= repository %>  创建了 <%= type %>: <%= name %>
`,
      push: `
\n分支: <%= name %>
\n仓库: <%= repository %>
\n是否新建: <%= created %>
\n是否删除: <%= deleted %>
\n是否强推: <%= forced %>
\n分支比较页面: <%= compare %>
\n本次提交: <%= commits %>
\n操作人: <%= actionLogin %>      
`,
      pullRequest:`
\nprAction: <%= action %>      
\npr标题: <%= title %>      
\npr地址: <%= url %>      
\npr状态: <%= state %>
\npr注释: <%= content %>
\npr提交人: <%= actionLogin %>
\npr提交时间: <%= createdAt %>
\npr更新时间: <%= updatedAt %>
\npr关闭时间: <%= closedAt %>
\npr合并时间: <%= mergedAt %>
\nprFrom: <%= from %>
\nprTo: <%= to %>
`
    },
    // github: '[github]\n\n'+
    //         'repository:<%= repository.full_name %>\n\n'+
    //         '<%= pusher.name %> pushed on branch <%= ref %> with the following commit(s):\n\n'+
    //         '<% _.forEach(commits, function(c) { %>[<%= c.id.substr(0, 7) %>] <%= c.message %>\n\n<% }); %>'
  },
};
