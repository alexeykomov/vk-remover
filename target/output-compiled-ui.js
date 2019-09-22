;(function(){var $JSCompiler_prototypeAlias$$;
function $goog$typeOf$$($value$jscomp$89$$) {
  var $s$jscomp$6$$ = typeof $value$jscomp$89$$;
  if ("object" == $s$jscomp$6$$) {
    if ($value$jscomp$89$$) {
      if ($value$jscomp$89$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$89$$ instanceof Object) {
        return $s$jscomp$6$$;
      }
      var $className$$ = Object.prototype.toString.call($value$jscomp$89$$);
      if ("[object Window]" == $className$$) {
        return "object";
      }
      if ("[object Array]" == $className$$ || "number" == typeof $value$jscomp$89$$.length && "undefined" != typeof $value$jscomp$89$$.splice && "undefined" != typeof $value$jscomp$89$$.propertyIsEnumerable && !$value$jscomp$89$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$ || "undefined" != typeof $value$jscomp$89$$.call && "undefined" != typeof $value$jscomp$89$$.propertyIsEnumerable && !$value$jscomp$89$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$6$$ && "undefined" == typeof $value$jscomp$89$$.call) {
      return "object";
    }
  }
  return $s$jscomp$6$$;
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
}
;function $goog$debug$Error$$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
function $goog$asserts$AssertionError$$($messagePattern_splitParts$jscomp$inline_9$$, $messageArgs$$) {
  $messagePattern_splitParts$jscomp$inline_9$$ = $messagePattern_splitParts$jscomp$inline_9$$.split("%s");
  for (var $returnString$jscomp$inline_10$$ = "", $subLast$jscomp$inline_11$$ = $messagePattern_splitParts$jscomp$inline_9$$.length - 1, $i$jscomp$inline_12$$ = 0; $i$jscomp$inline_12$$ < $subLast$jscomp$inline_11$$; $i$jscomp$inline_12$$++) {
    $returnString$jscomp$inline_10$$ += $messagePattern_splitParts$jscomp$inline_9$$[$i$jscomp$inline_12$$] + ($i$jscomp$inline_12$$ < $messageArgs$$.length ? $messageArgs$$[$i$jscomp$inline_12$$] : "%s");
  }
  $goog$debug$Error$$.call(this, $returnString$jscomp$inline_10$$ + $messagePattern_splitParts$jscomp$inline_9$$[$subLast$jscomp$inline_11$$]);
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$doAssertFailure_$$($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$jscomp$27$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$jscomp$27$$ += ": " + $givenMessage$$;
    var $args$jscomp$4$$ = $givenArgs$$;
  } else {
    $defaultMessage$$ && ($message$jscomp$27$$ += ": " + $defaultMessage$$, $args$jscomp$4$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$($message$jscomp$27$$, $args$jscomp$4$$ || []);
}
function $goog$asserts$assert$$($condition$jscomp$2$$, $opt_message$jscomp$8$$, $var_args$jscomp$41$$) {
  $condition$jscomp$2$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$jscomp$8$$, Array.prototype.slice.call(arguments, 2));
}
function $goog$asserts$assertNumber$$($value$jscomp$91$$, $opt_message$jscomp$11$$, $var_args$jscomp$44$$) {
  "number" == typeof $value$jscomp$91$$ || $goog$asserts$doAssertFailure_$$("Expected number but got %s: %s.", [$goog$typeOf$$($value$jscomp$91$$), $value$jscomp$91$$], $opt_message$jscomp$11$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$91$$;
}
;var $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$2$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$12$$.length);
  Array.prototype.forEach.call($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$2$$);
} : function($arr$jscomp$13$$, $f$jscomp$2$$, $opt_obj$jscomp$3$$) {
  for (var $l$jscomp$1$$ = $arr$jscomp$13$$.length, $arr2$$ = "string" == typeof $arr$jscomp$13$$ ? $arr$jscomp$13$$.split("") : $arr$jscomp$13$$, $i$jscomp$25$$ = 0; $i$jscomp$25$$ < $l$jscomp$1$$; $i$jscomp$25$$++) {
    $i$jscomp$25$$ in $arr2$$ && $f$jscomp$2$$.call($opt_obj$jscomp$3$$, $arr2$$[$i$jscomp$25$$], $i$jscomp$25$$, $arr$jscomp$13$$);
  }
};
function $goog$array$concat$$($var_args$jscomp$53$$) {
  return Array.prototype.concat.apply([], arguments);
}
function $goog$array$toArray$$($object$jscomp$2$$) {
  var $length$jscomp$16$$ = $object$jscomp$2$$.length;
  if (0 < $length$jscomp$16$$) {
    for (var $rv$jscomp$1$$ = Array($length$jscomp$16$$), $i$jscomp$41$$ = 0; $i$jscomp$41$$ < $length$jscomp$16$$; $i$jscomp$41$$++) {
      $rv$jscomp$1$$[$i$jscomp$41$$] = $object$jscomp$2$$[$i$jscomp$41$$];
    }
    return $rv$jscomp$1$$;
  }
  return [];
}
;function $goog$structs$Map$$($opt_map$$, $var_args$jscomp$88$$) {
  this.$b$ = {};
  this.$a$ = [];
  this.$c$ = 0;
  var $argLength$jscomp$2_keys$jscomp$inline_21$$ = arguments.length;
  if (1 < $argLength$jscomp$2_keys$jscomp$inline_21$$) {
    if ($argLength$jscomp$2_keys$jscomp$inline_21$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ = 0; $i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ < $argLength$jscomp$2_keys$jscomp$inline_21$$; $i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ += 2) {
      this.set(arguments[$i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$], arguments[$i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      if ($opt_map$$ instanceof $goog$structs$Map$$) {
        for ($argLength$jscomp$2_keys$jscomp$inline_21$$ = $opt_map$$.$getKeys$(), $i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ = 0; $i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ < $argLength$jscomp$2_keys$jscomp$inline_21$$.length; $i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$++) {
          this.set($argLength$jscomp$2_keys$jscomp$inline_21$$[$i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$], $opt_map$$.get($argLength$jscomp$2_keys$jscomp$inline_21$$[$i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$]));
        }
      } else {
        for ($i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$ in $opt_map$$) {
          this.set($i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$, $opt_map$$[$i$jscomp$91_i$jscomp$inline_22_key$jscomp$inline_23$$]);
        }
      }
    }
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$jscomp$13$$ = [], $i$jscomp$92$$ = 0; $i$jscomp$92$$ < this.$a$.length; $i$jscomp$92$$++) {
    $rv$jscomp$13$$.push(this.$b$[this.$a$[$i$jscomp$92$$]]);
  }
  return $rv$jscomp$13$$;
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$a$.concat();
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      var $key$jscomp$83$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$, $key$jscomp$83$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$83$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    var $seen$jscomp$2$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      $key$jscomp$83$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$jscomp$2$$, $key$jscomp$83$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$83$$, $seen$jscomp$2$$[$key$jscomp$83$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$jscomp$84$$, $opt_val$jscomp$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$84$$) ? this.$b$[$key$jscomp$84$$] : $opt_val$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$jscomp$85$$, $value$jscomp$128$$) {
  $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$85$$) || (this.$c$++, this.$a$.push($key$jscomp$85$$));
  this.$b$[$key$jscomp$85$$] = $value$jscomp$128$$;
};
$JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$jscomp$54$$, $opt_obj$jscomp$48$$) {
  for (var $keys$jscomp$8$$ = this.$getKeys$(), $i$jscomp$96$$ = 0; $i$jscomp$96$$ < $keys$jscomp$8$$.length; $i$jscomp$96$$++) {
    var $key$jscomp$87$$ = $keys$jscomp$8$$[$i$jscomp$96$$], $value$jscomp$129$$ = this.get($key$jscomp$87$$);
    $f$jscomp$54$$.call($opt_obj$jscomp$48$$, $value$jscomp$129$$, $key$jscomp$87$$, this);
  }
};
function $goog$structs$Map$hasKey_$$($obj$jscomp$80$$, $key$jscomp$91$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$80$$, $key$jscomp$91$$);
}
;var $goog$uri$utils$splitRe_$$ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function $goog$uri$utils$parseQueryData$$($encodedQuery_pairs$jscomp$1$$, $callback$jscomp$59$$) {
  if ($encodedQuery_pairs$jscomp$1$$) {
    $encodedQuery_pairs$jscomp$1$$ = $encodedQuery_pairs$jscomp$1$$.split("&");
    for (var $i$jscomp$100$$ = 0; $i$jscomp$100$$ < $encodedQuery_pairs$jscomp$1$$.length; $i$jscomp$100$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$100$$].indexOf("="), $value$jscomp$131$$ = null;
      if (0 <= $indexOfEquals$$) {
        var $name$jscomp$83$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$100$$].substring(0, $indexOfEquals$$);
        $value$jscomp$131$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$100$$].substring($indexOfEquals$$ + 1);
      } else {
        $name$jscomp$83$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$100$$];
      }
      $callback$jscomp$59$$($name$jscomp$83$$, $value$jscomp$131$$ ? decodeURIComponent($value$jscomp$131$$.replace(/\+/g, " ")) : "");
    }
  }
}
;function $goog$Uri$$($opt_uri$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$) {
  this.$f$ = this.$j$ = this.$c$ = "";
  this.$i$ = null;
  this.$g$ = this.$h$ = "";
  this.$a$ = !1;
  if ($opt_uri$$ instanceof $goog$Uri$$) {
    this.$a$ = void 0 !== $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$ ? $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$ : $opt_uri$$.$a$;
    $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$c$);
    this.$j$ = $opt_uri$$.$j$;
    this.$f$ = $opt_uri$$.$f$;
    $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$i$);
    this.$h$ = $opt_uri$$.$h$;
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$ = $opt_uri$$.$b$;
    var $m_rv$jscomp$inline_30$$ = new $goog$Uri$QueryData$$;
    $m_rv$jscomp$inline_30$$.$c$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$.$c$;
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$.$a$ && ($m_rv$jscomp$inline_30$$.$a$ = new $goog$structs$Map$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$.$a$), $m_rv$jscomp$inline_30$$.$b$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$.$b$);
    $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_30$$);
    this.$g$ = $opt_uri$$.$g$;
  } else {
    $opt_uri$$ && ($m_rv$jscomp$inline_30$$ = String($opt_uri$$).match($goog$uri$utils$splitRe_$$)) ? (this.$a$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$, $JSCompiler_StaticMethods_setScheme$$(this, $m_rv$jscomp$inline_30$$[1] || "", !0), this.$j$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_30$$[2] || ""), this.$f$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_30$$[3] || "", !0), $JSCompiler_StaticMethods_setPort$$(this, $m_rv$jscomp$inline_30$$[4]), 
    this.$h$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_30$$[5] || "", !0), $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_30$$[6] || "", !0), this.$g$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_30$$[7] || "")) : (this.$a$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_29_opt_ignoreCase$$, this.$b$ = new $goog$Uri$QueryData$$(null, this.$a$));
  }
}
$goog$Uri$$.prototype.toString = function $$goog$Uri$$$$toString$() {
  var $out$jscomp$1$$ = [], $scheme$jscomp$4_userInfo$$ = this.$c$;
  $scheme$jscomp$4_userInfo$$ && $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$4_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ = this.$f$;
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ || "file" == $scheme$jscomp$4_userInfo$$) {
    $out$jscomp$1$$.push("//"), ($scheme$jscomp$4_userInfo$$ = this.$j$) && $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$4_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), "@"), $out$jscomp$1$$.push(encodeURIComponent(String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ = this.$i$, null != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ && 
    $out$jscomp$1$$.push(":", String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ = this.$h$) {
    this.$f$ && "/" != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$.charAt(0) && $out$jscomp$1$$.push("/"), $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$, "/" == $domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ = this.$b$.toString()) && $out$jscomp$1$$.push("?", $domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$);
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$ = this.$g$) && $out$jscomp$1$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$25_port_query$jscomp$12$$, $goog$Uri$reDisallowedInFragment_$$));
  return $out$jscomp$1$$.join("");
};
function $JSCompiler_StaticMethods_setScheme$$($JSCompiler_StaticMethods_setScheme$self$$, $newScheme$$, $opt_decode$$) {
  $JSCompiler_StaticMethods_setScheme$self$$.$c$ = $opt_decode$$ ? $goog$Uri$decodeOrEmpty_$$($newScheme$$, !0) : $newScheme$$;
  $JSCompiler_StaticMethods_setScheme$self$$.$c$ && ($JSCompiler_StaticMethods_setScheme$self$$.$c$ = $JSCompiler_StaticMethods_setScheme$self$$.$c$.replace(/:$/, ""));
}
function $JSCompiler_StaticMethods_setPort$$($JSCompiler_StaticMethods_setPort$self$$, $newPort$$) {
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    $JSCompiler_StaticMethods_setPort$self$$.$i$ = $newPort$$;
  } else {
    $JSCompiler_StaticMethods_setPort$self$$.$i$ = null;
  }
}
function $JSCompiler_StaticMethods_setQueryData$$($JSCompiler_StaticMethods_setQueryData$self$$, $queryData$jscomp$6$$, $opt_decode$jscomp$4$$) {
  $queryData$jscomp$6$$ instanceof $goog$Uri$QueryData$$ ? ($JSCompiler_StaticMethods_setQueryData$self$$.$b$ = $queryData$jscomp$6$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$($JSCompiler_StaticMethods_setQueryData$self$$.$b$, $JSCompiler_StaticMethods_setQueryData$self$$.$a$)) : ($opt_decode$jscomp$4$$ || ($queryData$jscomp$6$$ = $goog$Uri$encodeSpecialChars_$$($queryData$jscomp$6$$, $goog$Uri$reDisallowedInQuery_$$)), $JSCompiler_StaticMethods_setQueryData$self$$.$b$ = 
  new $goog$Uri$QueryData$$($queryData$jscomp$6$$, $JSCompiler_StaticMethods_setQueryData$self$$.$a$));
}
function $goog$Uri$decodeOrEmpty_$$($val$jscomp$36$$, $opt_preserveReserved$jscomp$1$$) {
  return $val$jscomp$36$$ ? $opt_preserveReserved$jscomp$1$$ ? decodeURI($val$jscomp$36$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$jscomp$36$$) : "";
}
function $goog$Uri$encodeSpecialChars_$$($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return "string" == typeof $encoded_unescapedPart$$ ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = $encoded_unescapedPart$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $encoded_unescapedPart$$) : null;
}
function $goog$Uri$encodeChar_$$($ch$jscomp$4_n$jscomp$8$$) {
  $ch$jscomp$4_n$jscomp$8$$ = $ch$jscomp$4_n$jscomp$8$$.charCodeAt(0);
  return "%" + ($ch$jscomp$4_n$jscomp$8$$ >> 4 & 15).toString(16) + ($ch$jscomp$4_n$jscomp$8$$ & 15).toString(16);
}
var $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g;
function $goog$Uri$QueryData$$($opt_query$jscomp$1$$, $opt_ignoreCase$jscomp$3$$) {
  this.$b$ = this.$a$ = null;
  this.$c$ = $opt_query$jscomp$1$$ || null;
  this.$f$ = !!$opt_ignoreCase$jscomp$3$$;
}
function $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$ || ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$ = new $goog$structs$Map$$, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$b$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$ && $goog$uri$utils$parseQueryData$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$, function($name$jscomp$86$$, $value$jscomp$136$$) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add(decodeURIComponent($name$jscomp$86$$.replace(/\+/g, " ")), $value$jscomp$136$$);
  }));
}
$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($key$jscomp$100$$, $value$jscomp$138$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$c$ = null;
  $key$jscomp$100$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$100$$);
  var $values$jscomp$18$$ = this.$a$.get($key$jscomp$100$$);
  $values$jscomp$18$$ || this.$a$.set($key$jscomp$100$$, $values$jscomp$18$$ = []);
  $values$jscomp$18$$.push($value$jscomp$138$$);
  this.$b$ = $goog$asserts$assertNumber$$(this.$b$) + 1;
  return this;
};
function $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$, $key$jscomp$101_key$jscomp$inline_45$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$);
  $key$jscomp$101_key$jscomp$inline_45$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$, $key$jscomp$101_key$jscomp$inline_45$$);
  $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$a$.$b$, $key$jscomp$101_key$jscomp$inline_45$$) && ($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$c$ = null, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$b$ = 
  $goog$asserts$assertNumber$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$b$) - $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$a$.get($key$jscomp$101_key$jscomp$inline_45$$).length, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$ = 
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$a$, $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$b$, $key$jscomp$101_key$jscomp$inline_45$$) && (delete $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$b$[$key$jscomp$101_key$jscomp$inline_45$$], 
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$c$--, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$a$.length > 2 * $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$.$c$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$self_JSCompiler_StaticMethods_goog_structs_Map_prototype$remove$self$jscomp$inline_44$$)));
}
function $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$102$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$);
  $key$jscomp$102$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$102$$);
  return $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$.$a$.$b$, $key$jscomp$102$$);
}
$JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$jscomp$55$$, $opt_scope$jscomp$3$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$a$.forEach(function($values$jscomp$19$$, $key$jscomp$103$$) {
    $goog$array$forEach$$($values$jscomp$19$$, function($value$jscomp$140$$) {
      $f$jscomp$55$$.call($opt_scope$jscomp$3$$, $value$jscomp$140$$, $key$jscomp$103$$, this);
    }, this);
  }, this);
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$jscomp$1$$ = this.$a$.$getValues$(), $keys$jscomp$11$$ = this.$a$.$getKeys$(), $rv$jscomp$14$$ = [], $i$jscomp$104$$ = 0; $i$jscomp$104$$ < $keys$jscomp$11$$.length; $i$jscomp$104$$++) {
    for (var $val$jscomp$37$$ = $vals$jscomp$1$$[$i$jscomp$104$$], $j$jscomp$9$$ = 0; $j$jscomp$9$$ < $val$jscomp$37$$.length; $j$jscomp$9$$++) {
      $rv$jscomp$14$$.push($keys$jscomp$11$$[$i$jscomp$104$$]);
    }
  }
  return $rv$jscomp$14$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$($opt_key$jscomp$2_values$jscomp$20$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$jscomp$15$$ = [];
  if ("string" == typeof $opt_key$jscomp$2_values$jscomp$20$$) {
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $opt_key$jscomp$2_values$jscomp$20$$) && ($rv$jscomp$15$$ = $goog$array$concat$$($rv$jscomp$15$$, this.$a$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$jscomp$2_values$jscomp$20$$))));
  } else {
    $opt_key$jscomp$2_values$jscomp$20$$ = this.$a$.$getValues$();
    for (var $i$jscomp$105$$ = 0; $i$jscomp$105$$ < $opt_key$jscomp$2_values$jscomp$20$$.length; $i$jscomp$105$$++) {
      $rv$jscomp$15$$ = $goog$array$concat$$($rv$jscomp$15$$, $opt_key$jscomp$2_values$jscomp$20$$[$i$jscomp$105$$]);
    }
  }
  return $rv$jscomp$15$$;
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$jscomp$104$$, $value$jscomp$141$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$c$ = null;
  $key$jscomp$104$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$104$$);
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $key$jscomp$104$$) && (this.$b$ = $goog$asserts$assertNumber$$(this.$b$) - this.$a$.get($key$jscomp$104$$).length);
  this.$a$.set($key$jscomp$104$$, [$value$jscomp$141$$]);
  this.$b$ = $goog$asserts$assertNumber$$(this.$b$) + 1;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$jscomp$105_values$jscomp$21$$, $opt_default$$) {
  if (!$key$jscomp$105_values$jscomp$21$$) {
    return $opt_default$$;
  }
  $key$jscomp$105_values$jscomp$21$$ = this.$getValues$($key$jscomp$105_values$jscomp$21$$);
  return 0 < $key$jscomp$105_values$jscomp$21$$.length ? String($key$jscomp$105_values$jscomp$21$$[0]) : $opt_default$$;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  if (this.$c$) {
    return this.$c$;
  }
  if (!this.$a$) {
    return "";
  }
  for (var $sb$jscomp$2$$ = [], $keys$jscomp$12$$ = this.$a$.$getKeys$(), $i$jscomp$106$$ = 0; $i$jscomp$106$$ < $keys$jscomp$12$$.length; $i$jscomp$106$$++) {
    var $key$jscomp$107_val$jscomp$38$$ = $keys$jscomp$12$$[$i$jscomp$106$$], $encodedKey$$ = encodeURIComponent(String($key$jscomp$107_val$jscomp$38$$));
    $key$jscomp$107_val$jscomp$38$$ = this.$getValues$($key$jscomp$107_val$jscomp$38$$);
    for (var $j$jscomp$10$$ = 0; $j$jscomp$10$$ < $key$jscomp$107_val$jscomp$38$$.length; $j$jscomp$10$$++) {
      var $param$jscomp$5$$ = $encodedKey$$;
      "" !== $key$jscomp$107_val$jscomp$38$$[$j$jscomp$10$$] && ($param$jscomp$5$$ += "=" + encodeURIComponent(String($key$jscomp$107_val$jscomp$38$$[$j$jscomp$10$$])));
      $sb$jscomp$2$$.push($param$jscomp$5$$);
    }
  }
  return this.$c$ = $sb$jscomp$2$$.join("&");
};
function $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$jscomp$8_keyName$$) {
  $arg$jscomp$8_keyName$$ = String($arg$jscomp$8_keyName$$);
  $JSCompiler_StaticMethods_getKeyName_$self$$.$f$ && ($arg$jscomp$8_keyName$$ = $arg$jscomp$8_keyName$$.toLowerCase());
  return $arg$jscomp$8_keyName$$;
}
function $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$, $ignoreCase$jscomp$1$$) {
  $ignoreCase$jscomp$1$$ && !$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$), $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$c$ = null, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$a$.forEach(function($value$jscomp$143$$, $key$jscomp$109$$) {
    var $lowerCase$$ = $key$jscomp$109$$.toLowerCase();
    $key$jscomp$109$$ != $lowerCase$$ && ($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$$(this, $key$jscomp$109$$), $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$remove$$(this, $lowerCase$$), 0 < $value$jscomp$143$$.length && (this.$c$ = null, this.$a$.set($JSCompiler_StaticMethods_getKeyName_$$(this, $lowerCase$$), $goog$array$toArray$$($value$jscomp$143$$)), this.$b$ = $goog$asserts$assertNumber$$(this.$b$) + $value$jscomp$143$$.length));
  }, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$));
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ = $ignoreCase$jscomp$1$$;
}
;window.addEventListener("load", function() {
  var $JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$ = "https://alexeykomov.me/vk-remover/#access_token=cada6438423dfbd4eb3028151831a7efc7b54143242aff750e3a22b25db2f1c6c0d581075b474fba24649&expires_in=86400&user_id=61594020&state=123456".replace(/#/, "?");
  $JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$ = $JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$ instanceof $goog$Uri$$ ? new $goog$Uri$$($JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$) : new $goog$Uri$$($JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$, void 0);
  var $userId$$ = $JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$.$b$.get("user_id"), $accessToken$$ = $JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$.$b$.get("access_token");
  console.log("url: ", $JSCompiler_inline_result$jscomp$5_uri$jscomp$inline_51$$);
  console.log("userId: ", $userId$$);
  console.log("accessToken: ", $accessToken$$);
}, !1);
})();
