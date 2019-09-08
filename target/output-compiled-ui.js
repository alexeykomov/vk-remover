;(function(){document.addEventListener("load", function() {
  VK.UI.button("login-button");
  VK.Auth.login(function() {
  });
  VK.Api.call("users.get", {$user_ids$:6492, $v$:"5.73"}, function($r$jscomp$1$$) {
    $r$jscomp$1$$.response && (alert("Привет, " + $r$jscomp$1$$.response[0].$first_name$), console.log("Starting to remove outgoing requests."));
  });
}, !1);
})();
