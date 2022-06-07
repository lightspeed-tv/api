// This file was auto-generated by @insertish/oapi!
export const pathResolve = {"1":[["regions"]],"2":[["streams",""],["streams","@me"],["streams",["{path}"]],["streams","reset_token"],["users","@me"],["users",["{path}"]],["categories","create"],["categories",["{id}"]],["categories",""]],"3":[["chat",["{target}"],"messages"],["auth","account","create"],["auth","account","reverify"],["auth","account",""],["auth","account","reset_password"],["auth","session","login"],["auth","session","logout"],["auth","session","all"],["auth","session",["{id}"]]],"4":[["streams",["{target}"],"bans",["{id}"]],["chat",["{target}"],"messages",["{id}"]],["auth","account","change","password"],["auth","account","change","email"],["auth","account","verify",["{code}"]]]};
export const queryParams = {"/regions":{"get":[]},"/streams/":{"get":[],"put":[]},"/streams/@me":{"get":[],"patch":[]},"/streams/{path}":{"get":[]},"/streams/reset_token":{"post":[]},"/streams/{target}/bans/{id}":{"put":[],"delete":[]},"/users/@me":{"get":[],"put":[],"patch":[]},"/users/{path}":{"get":[]},"/categories/create":{"post":[]},"/categories/{id}":{"delete":[],"patch":[]},"/categories/":{"get":[]},"/chat/{target}/messages":{"get":[],"post":[]},"/chat/{target}/messages/{id}":{"delete":[]},"/auth/account/create":{"post":[]},"/auth/account/reverify":{"post":[]},"/auth/account/":{"get":[]},"/auth/account/change/password":{"patch":[]},"/auth/account/change/email":{"patch":[]},"/auth/account/verify/{code}":{"post":[]},"/auth/account/reset_password":{"post":[],"patch":[]},"/auth/session/login":{"post":[]},"/auth/session/logout":{"post":[]},"/auth/session/all":{"get":[],"delete":["revoke_self"]},"/auth/session/{id}":{"delete":[],"patch":[]}};