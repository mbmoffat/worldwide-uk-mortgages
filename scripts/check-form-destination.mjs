#!/usr/bin/env node
// Build guard for enquiry routing.
//
// The contact form's FormSubmit action endpoint is the single most
// important conversion path on the site: change it or drop it and
// enquiries silently stop reaching the broker. This check runs as a
// prebuild step and fails the build if the exact endpoint is missing
// from src/components/ContactForm.astro.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const EXPECTED_ENDPOINT = 'https://formsubmit.co/7425ff70130d1f5a7a46d1effcf819b2';

const here = dirname(fileURLToPath(import.meta.url));
const formPath = resolve(here, '..', 'src', 'components', 'ContactForm.astro');

let source;
try {
  source = readFileSync(formPath, 'utf8');
} catch (err) {
  console.error('check-form-destination: FAILED');
  console.error(`Could not read ${formPath}`);
  console.error(err.message);
  process.exit(1);
}

if (!source.includes(EXPECTED_ENDPOINT)) {
  console.error('check-form-destination: FAILED');
  console.error('The enquiry form action endpoint is missing from');
  console.error('src/components/ContactForm.astro. Expected to find:');
  console.error(`  ${EXPECTED_ENDPOINT}`);
  console.error('Enquiry routing must not change. Restore the FormSubmit action before building.');
  process.exit(1);
}

console.log('check-form-destination: OK (enquiry form destination intact)');
process.exit(0);
