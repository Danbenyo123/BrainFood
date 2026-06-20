import { get, post, put, del } from './client.js';

const BASE = '/api/v1/notes';

export const getNotes           = ()              => get(BASE);
export const getNote            = (id)            => get(`${BASE}/${id}`);
export const createNote         = (body)          => post(BASE, body);
export const updateNote         = (id, body)      => put(`${BASE}/${id}`, body);
export const deleteNote         = (id)            => del(`${BASE}/${id}`);
