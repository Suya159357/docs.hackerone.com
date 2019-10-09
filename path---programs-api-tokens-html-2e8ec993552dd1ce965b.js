webpackJsonp([0x6a90531fe187],{721:function(a,n){a.exports={data:{markdownRemark:{html:'<p>Your program’s administrative users can generate and manage API tokens to experiment with or use the HackerOne API. The API token identifier and value are used as the username and password for HTTP Basic authentication.</p>\n<p>To generate an API token:</p>\n<ol>\n<li>\n<p>Go to <b>Settings > Program > Automation > API</b>.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/api-token-1-7455788683c257af567df36b2b88fb74-c05d9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.222453222453225%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABnUlEQVQoz5VT2XaCMBT0/3/ON1sWqxWEBFBZwiowvRMbj22fmuOc4S65uZubpmlQ1zW6rsOyLH8xz8Lzgx1++cyiI8ZxxOZwOCAIAsRxjHVdreHVaV7xA/J72u73u+WHFpimCZv9fg/f923QMAyfvNvt4Mu3f4zx/hHhbf+J4DNBeIwQiv7N87F79+AFIZJU2eDERmsFrVJkmRZWKPIcuUUhukxYILZM/PJv+XK5QN8aqKtBXrUoSoNJgtkME50jTjPEKsdZZUhFTtIUSZLYNpDP5zNS0VHmt+MoiqAkGWezPSxNj7q/o+pGlGZA3Q7goG63G8qqQlmWT3B41JMJZloUheVKfG2GSqIfDx8wEuS/h49st1sLz/MwDMNjyrGkT4EOLJGpE33fW70D5U5AHgdhWTVjDBoB125iyUoGwSG4ck6nk5Wv1yvatrUlvZbFi20vjzedtEeCNgajVDfJI7Zk1wsyX+ZlrbVl7pjNSoIwQ+4pTz/NuDSD9H2SYAaL3F2YIdfmtSfugjtccKcju3/Gui6PZRYdrd+SbdMXB99KsVV8bPoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="api-token-1"\n        title=""\n        src="/static/api-token-1-7455788683c257af567df36b2b88fb74-2f183.png"\n        srcset="/static/api-token-1-7455788683c257af567df36b2b88fb74-67829.png 125w,\n/static/api-token-1-7455788683c257af567df36b2b88fb74-5c59f.png 250w,\n/static/api-token-1-7455788683c257af567df36b2b88fb74-2f183.png 500w,\n/static/api-token-1-7455788683c257af567df36b2b88fb74-c93e8.png 750w,\n/static/api-token-1-7455788683c257af567df36b2b88fb74-4e628.png 1000w,\n/static/api-token-1-7455788683c257af567df36b2b88fb74-b3ac4.png 1500w,\n/static/api-token-1-7455788683c257af567df36b2b88fb74-c05d9.png 1924w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n<li>\n<p>Click <b>Create API Token</b>.</p>\n</li>\n<li>\n<p>Enter an identifier for the new API token.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/api-token-3-08961576046a14fc8acdf4b95cdc717e-8ade4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 63.87959866220736%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACHklEQVQ4y41T23KiQBD1/z/Bl90/yL7pg7puotmopYAKKl5AuUPUGBQE1JOecTXuVlmbqTo13TM93acPTe77tzx0XYOqDjkmYxXqaIDJROX2YCBD7vcgy3dAd/1+l+PpsYrc468K2NJ1HavVCvp8DsfzoGk6bNtBdjjgK2u5XGGxmCP3s1LBPt6jXqsTmwF6/T4sx0Wz0USj0cD6bXM3yel0QpZlOPwp6hGRXKVyZmgYJlbrNYLgFa7j0KWPJTGezTRe2XNdHjOdTEiSESzLxnsY/lUgCALkqtUqoihC4+UFoiih1+1DURQM6ZEiK5CkLqbTKbqSRDrJPJkoihAEEePxGBrp/x5uPxOWy2XuzHWmmU3sXLiux23WAkPgB8Rywc8D34dDMaZpwTJN+ngTbN7Dz4SlUok7+/2e68GQpinf2RmzD4cMx+ORa3XRjPkMl7fsjCe8aKjNplTV4AwNwyDtZhw+Bd2K/y9uC/jE/sowjmPO5sLusn8FLPba8sPDjzPtOEKa7Il+jIiSx/9DFGMX7c7YbZGlGXVoIlcoFLCLE+iWB9N9pdF5w3YbIgzvYxvuMLAFSMYzZKuFzvwJU1+BsaCExWIRGWk71D2MFj4224jaSJEkyVWCWyRpwtkMvTYkpwbVFyHZNWhrmfQnDfP5PEbDIXqSCIX+S1EQ+JxJNHcC2QydTudsd84+u2+1W/jdrHM8N2roCG2wmf4A2nbGI5C3vzAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="api-token-3"\n        title=""\n        src="/static/api-token-3-08961576046a14fc8acdf4b95cdc717e-2f183.png"\n        srcset="/static/api-token-3-08961576046a14fc8acdf4b95cdc717e-67829.png 125w,\n/static/api-token-3-08961576046a14fc8acdf4b95cdc717e-5c59f.png 250w,\n/static/api-token-3-08961576046a14fc8acdf4b95cdc717e-2f183.png 500w,\n/static/api-token-3-08961576046a14fc8acdf4b95cdc717e-8ade4.png 598w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n<li>\n<p>Store the generated API token.</p>\n</li>\n<li>\n<p>Click <b>I have stored the API Token</b>.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/api-token-4-534280149bba81c03c088c1533a8a99d-8ade4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 94.64882943143813%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAADZ0lEQVQ4y6VUW28bRRTen8kLL7zwgACVSyuEQEi89AERWkpppT6GtMVRYmeTOLFD4iSOvev7HdvxNU6MSUzitRNfdr3+es6xG4tWQkgd6dtvzpk535w5M7PKg4X7SKUSCIc0RMI6IhEd4bAmYDukB6Frgf9EMOiXuS9fLEJZV1fAzTAMjEYmhsMhxuMxwSZ7hP/bDKMriSmquobBYABVVVGpVODz+eDxeJDNZnDk96Pdbr8VzAva9ni28BiWZYo/mRTBdZimiXw+j1wuh0wmI0in0ySaFbA/EokgFAqJn9tkMrkFi3LjMYUzs21bAlKpFNUuLIKvg9lfKpVQKBREnPtvCnL8raDT6cS7Nt7hW4K1Wo1qkEQ0GpXtc7acXTAYlGwZnH0sFhPwPB73U53L5bJocIzicrnEOC4WEY/HaJUUEom4FJgXqNdraDbP0Gr9hXqN+03y1XF62qAkqqhWq3RwF/MMV1dXxahU6oKTxhnyhWNUqnWcNVt0jSwMhibdBLpSo2mfmf3Mo9EYveu+aHDtlefPX0wLYZ3Tp0O4mvPkEhPzHBPrAvaMJ9b5FGS/9pmDJs23kWZBp0vlM0MuvoJo8CUSugPl3CYKqTVU8m7UittiN6t/oJhZR6PkRf3YgxPi08oO8sk19C6OJIl0OgtleXlFBOtFD6LaMkq5LWRiLjTKuxS4Q4EsRAukN0ncK+O5hIpcUhV/Je/B0IiKYCKZmQv+fbKPSMAhAQyeXP5zG9n4mgjwIt12GK2TA1y1NJp/gFb9AO1mAGYvJoLJFAk6RNCmCXu0Nbds6Z+mH9XCFmW5Q34fCbtpy7vAkF6JlQVGmSkzzCys66jUPJmkU16ZnbJtXdK3R+hSwsasf/1vjI030BG2zcv5tXE4HGL0en3c9Ifoz3BzM4DR66LTNabcm/IcZF/3xN/pdkWDL7uyuPibGJ3OFYl20SX06V491b7Gj0cf4Vf9Hh4G7+Cx9iXhrtiPtC/wNPSV8LPwt/h+730c1pyIh+ml/L48/R/yL4zfJMO2gMf6Xdw/+gBPwvfwQPsEj/TP8Evoc/ykfYyf9Tt4qH+KHwIf4ln0G3znew/+hhO5VAHKwsKCvNH9/X0cHh7eYndvF27vBjY968Ju4tu+l9izgS3vJvlUuLc3EAgEsLS0hFdoGkwyd1zgCwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="api-token-4"\n        title=""\n        src="/static/api-token-4-534280149bba81c03c088c1533a8a99d-2f183.png"\n        srcset="/static/api-token-4-534280149bba81c03c088c1533a8a99d-67829.png 125w,\n/static/api-token-4-534280149bba81c03c088c1533a8a99d-5c59f.png 250w,\n/static/api-token-4-534280149bba81c03c088c1533a8a99d-2f183.png 500w,\n/static/api-token-4-534280149bba81c03c088c1533a8a99d-8ade4.png 598w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n</ol>\n<p>You’ll get a confirmation email stating that you’ve created a new API token. You can manage the groups that have access to the API tokens and revoke the token as well.</p>\n<p>To learn more about the HackerOne API check out our <a href="https://api.hackerone.com/docs/v1">API docs</a>.</p>\n<h3>Managing Groups</h3>\n<p>To manage which groups have access to the API tokens:</p>\n<ol>\n<li>Click <b>Manage groups</b> on the API settings page for the identifier you want to manage groups for.</li>\n<li>Select which groups you want to give permissions to. When a group isn’t selected, they only have read-only permissions.</li>\n<li>Click <b>Apply changes</b>.</li>\n</ol>',frontmatter:{path:"/programs/api-tokens.html",id:"programs/api-tokens",title:"API Tokens",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-api-tokens-html-2e8ec993552dd1ce965b.js.map