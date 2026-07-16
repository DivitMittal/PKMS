# Security Policy

## Scope

This is a personal knowledge management vault — no servers, no credentials, no network services in this repo. The relevant attack surface is limited to:

- **Nix flake tooling** — derivations that install tools into the devshell
- **Obsidian plugin configs** tracked in `.obsidian/` — ensure no tokens or API keys end up in plugin data files

## Reporting a Vulnerability

If you find a security issue (e.g. a plugin data file that accidentally contains a credential, or a Nix expression that executes untrusted input):

1. Open a **GitHub issue**.
1. Include a description and impact assessment.

## Out of Scope

- Obsidian platform security issues (report to Obsidian)
- Issues in upstream nixpkgs (report upstream)

## Supported Versions

Only the latest commit on `main` is supported.
