// Resource route: no default export → loader Response is returned verbatim.
export function loader() {
  return new Response('ok', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
