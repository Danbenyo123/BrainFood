import { get, post, put, del } from './client.js';

const BASE = '/api/v1/clusters';

export const getClusters           = ()            => get(BASE);
export const getCluster            = (id)            => get(`${BASE}/${id}`);
export const createCluster         = (body)          => post(BASE, body);
export const updateCluster         = (id, body)      => put(`${BASE}/${id}`, body);
export const deleteCluster        = (id)            => del(`${BASE}/${id}`);
