---
description: Project knowledge for the personal PKMS Obsidian/Zettelkasten vault
applyTo: "**"
---

# PROJECT KNOWLEDGE BASE

## OVERVIEW
Personal Knowledge Management System (PKMS) using Obsidian-style markdown following the Zettelkasten method. Managed with a Nix flake providing devshell, formatters, pre-commit hooks, and CI.

## STRUCTURE
```
./
├── flake.nix                    # Nix flake entry point
├── flake/                       # Flake modules (devshells, formatters, checks, CI)
│   ├── devshells.nix
│   ├── formatters.nix
│   ├── checks.nix
│   ├── actions/                 # CI workflow generation
│   ├── plugins/                 # Plugin-related Nix configs
│   └── zk/                     # zk note-taking tool config
├── etc/                         # Supplementary config
├── Vaults/                      # Personal Obsidian vaults (gitignored)
├── .obsidian/                   # Obsidian app config (tracked selectively)
└── .github/workflows/           # Generated CI workflows
```

## CONVENTIONS
- `Vaults/` is gitignored — personal notes never committed
- `.obsidian/` plugin configs and theme files are tracked; plugin binaries (main.js, manifest.json, styles.css) are also tracked for reproducibility
- Nix flake manages tooling only — not vault content
- Use `nix develop` to enter devshell with all tools available

## COMMANDS
```bash
nix develop
nix fmt
nix flake check
```

## ANTI-PATTERNS
- Do not commit vault content from `Vaults/`
- Do not edit generated CI workflows in `.github/workflows/` by hand
