// This file was auto-generated by @insertish/oapi!
import { paths } from './schema';
export type APIRoutes =
| { method: 'get', path: `/regions`, parts: 1, params: undefined, response: paths['/regions']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/streams/`, parts: 2, params: undefined, response: paths['/streams/']['get']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/streams/`, parts: 2, params: paths['/streams/']['put']['requestBody']['content']['application/json'], response: paths['/streams/']['put']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/streams/@me`, parts: 2, params: undefined, response: paths['/streams/@me']['get']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: `/streams/@me`, parts: 2, params: paths['/streams/@me']['patch']['requestBody']['content']['application/json'], response: paths['/streams/@me']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/streams/${string}`, parts: 2, params: undefined, response: paths['/streams/{path}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/streams/{path}', parts: 2, params: undefined, response: paths['/streams/{path}']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/streams/reset_token`, parts: 2, params: undefined, response: paths['/streams/reset_token']['post']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/streams/${string}/bans/${string}`, parts: 4, params: undefined, response: paths['/streams/{target}/bans/{id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/streams/{target}/bans/{id}', parts: 4, params: undefined, response: paths['/streams/{target}/bans/{id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/streams/${string}/bans/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/streams/{target}/bans/{id}', parts: 4, params: undefined, response: undefined }
| { method: 'get', path: `/users/@me`, parts: 2, params: undefined, response: paths['/users/@me']['get']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/users/@me`, parts: 2, params: paths['/users/@me']['put']['requestBody']['content']['application/json'], response: paths['/users/@me']['put']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: `/users/@me`, parts: 2, params: paths['/users/@me']['patch']['requestBody']['content']['application/json'], response: paths['/users/@me']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/${string}`, parts: 2, params: undefined, response: paths['/users/{path}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/users/{path}', parts: 2, params: undefined, response: paths['/users/{path}']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/categories/create`, parts: 2, params: paths['/categories/create']['post']['requestBody']['content']['application/json'], response: paths['/categories/create']['post']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/categories/${string}`, parts: 2, params: undefined, response: undefined }
| { method: 'delete', path: '-/categories/{id}', parts: 2, params: undefined, response: undefined }
| { method: 'patch', path: `/categories/${string}`, parts: 2, params: paths['/categories/{id}']['patch']['requestBody']['content']['application/json'], response: paths['/categories/{id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/categories/{id}', parts: 2, params: paths['/categories/{id}']['patch']['requestBody']['content']['application/json'], response: paths['/categories/{id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/categories/`, parts: 2, params: undefined, response: paths['/categories/']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/chat/${string}/messages`, parts: 3, params: undefined, response: paths['/chat/{target}/messages']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/chat/{target}/messages', parts: 3, params: undefined, response: paths['/chat/{target}/messages']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/chat/${string}/messages`, parts: 3, params: paths['/chat/{target}/messages']['post']['requestBody']['content']['application/json'], response: paths['/chat/{target}/messages']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/chat/{target}/messages', parts: 3, params: paths['/chat/{target}/messages']['post']['requestBody']['content']['application/json'], response: paths['/chat/{target}/messages']['post']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/chat/${string}/messages/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/chat/{target}/messages/{id}', parts: 4, params: undefined, response: undefined }
| { method: 'post', path: `/auth/account/create`, parts: 3, params: paths['/auth/account/create']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/account/reverify`, parts: 3, params: paths['/auth/account/reverify']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'get', path: `/auth/account/`, parts: 3, params: undefined, response: paths['/auth/account/']['get']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: `/auth/account/change/password`, parts: 4, params: paths['/auth/account/change/password']['patch']['requestBody']['content']['application/json'], response: undefined }
| { method: 'patch', path: `/auth/account/change/email`, parts: 4, params: paths['/auth/account/change/email']['patch']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/account/verify/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'post', path: '-/auth/account/verify/{code}', parts: 4, params: undefined, response: undefined }
| { method: 'post', path: `/auth/account/reset_password`, parts: 3, params: paths['/auth/account/reset_password']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'patch', path: `/auth/account/reset_password`, parts: 3, params: paths['/auth/account/reset_password']['patch']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/session/login`, parts: 3, params: paths['/auth/session/login']['post']['requestBody']['content']['application/json'], response: paths['/auth/session/login']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/auth/session/logout`, parts: 3, params: undefined, response: undefined }
| { method: 'get', path: `/auth/session/all`, parts: 3, params: undefined, response: paths['/auth/session/all']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/auth/session/all`, parts: 3, params: paths['/auth/session/all']['delete']['parameters']['query'], response: undefined }
| { method: 'delete', path: `/auth/session/${string}`, parts: 3, params: undefined, response: undefined }
| { method: 'delete', path: '-/auth/session/{id}', parts: 3, params: undefined, response: undefined }
| { method: 'patch', path: `/auth/session/${string}`, parts: 3, params: paths['/auth/session/{id}']['patch']['requestBody']['content']['application/json'], response: paths['/auth/session/{id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/auth/session/{id}', parts: 3, params: paths['/auth/session/{id}']['patch']['requestBody']['content']['application/json'], response: paths['/auth/session/{id}']['patch']['responses']['200']['content']['application/json'] };