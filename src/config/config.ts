export const config = {
  shortenUrlBase: 'https://s.bidwin.top/api/v1/shorten',
  wechatWorkHost: 'https://qyapi.weixin.qq.com',
  template: {
    github: {
      issue: `
        [<%= actionLogin %>]
        [<%= action %>]
        [<%= repository %>][<%= title %>]
        
        <%= content %>

        <%= url %>
      `,
      /**
       * <%= commentContent %>
       * <%= content %>
       * <%= commentUrl %>
       * 
       * [iyjian/dev-raven]
       * issue: test
       * test
       * https://github.com/iyjian/dev-raven/issues/4
       */
      issueComment: `
        [<%= actionLogin %>]
        [<%= action %>]
        [<%= repository %>][<%= title %>]
        
        <%= commentContent %>

        <%= url %>
      `,
      create: `
        <%= actionLogin %> 在 <%= repository %>  创建了 <%= type %>: <%= name %>
      `,
      push: `
        [<%= actionLogin %>]
        分支: <%= name %>
        仓库: <%= repository %>
        是否新建: <%= created %>
        是否删除: <%= deleted %>
        是否强推: <%= forced %>
        分支比较页面: <%= compare %>
        本次提交: <%= commits %>
        操作人:       
      `,
      pullRequest:`
        prAction: <%= action %>      
        pr标题: <%= title %>      
        pr地址: <%= url %>      
        pr状态: <%= state %>
        pr注释: <%= content %>
        pr提交人: <%= actionLogin %>
        pr提交时间: <%= createdAt %>
        pr更新时间: <%= updatedAt %>
        pr关闭时间: <%= closedAt %>
        pr合并时间: <%= mergedAt %>
        prFrom: <%= from %>
        prTo: <%= to %>
      `
    },
    // github: '[github]'+
    //         'repository:<%= repository.full_name %>'+
    //         '<%= pusher.name %> pushed on branch <%= ref %> with the following commit(s):'+
    //         '<% _.forEach(commits, function(c) { %>[<%= c.id.substr(0, 7) %>] <%= c.message %><% }); %>'
  },
};
