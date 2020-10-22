/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 200,
  duration: '60s',
};

export default function () {
  const random = Math.floor(Math.random() * 10000000);
  const result = http.get(`http://localhost:3002/api/products/${random}`);
  check(result, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 200ms': (r) => r.timings.duration < 200,
    'transaction time < 500ms': (r) => r.timings.duration < 500,
    'transaction time < 1000ms': (r) => r.timings.duration < 1000,
    'transaction time < 2000ms': (r) => r.timings.duration < 2000,
  });
  sleep(0.1);
}
