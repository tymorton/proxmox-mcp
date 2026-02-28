# Proxmox Plus Gemini Extension

This extension integrates [ProxmoxMCP-Plus](https://github.com/RekklesNA/ProxmoxMCP-Plus) into the Gemini CLI, allowing you to manage your Proxmox Virtual Environment (PVE) cluster directly through AI.

## Features

- **Full MCP Integration**: Access all Proxmox management tools (VM control, snapshots, node status, etc.).
- **AI Context**: Includes a `GEMINI.md` file that teaches the AI how to safely manage your cluster.
- **Custom Commands**:
  - `/proxmox:status`: Get a high-level summary of your cluster's health.

## Installation

You can install this extension directly via the Gemini CLI:

```bash
gemini extensions install https://github.com/tymorton/proxmox-plus-extension
```

Alternatively, for local development:

```bash
git clone https://github.com/tymorton/proxmox-plus-extension
gemini extensions link ./proxmox-plus-extension
```

## Configuration

When you first install or run the extension, Gemini CLI will prompt you for the following settings:

| Setting | Description |
| :--- | :--- |
| `PROXMOX_HOST` | Proxmox server IP or hostname (e.g. `192.168.1.100`) |
| `PROXMOX_USER` | Proxmox username (e.g. `root@pam`) |
| `PROXMOX_TOKEN_NAME` | API Token ID |
| `PROXMOX_TOKEN_VALUE` | API Token Secret |
| `PROXMOX_PORT` | Proxmox API port (default: `8006`) |
| `PROXMOX_VERIFY_SSL` | Verify SSL certificates (`true`/`false`) |

## Usage

Once installed, you can ask Gemini questions like:

- "Show me a summary of my Proxmox cluster."
- "What VMs are currently running on node 'pve-01'?"
- "Create a snapshot of VM 101 before I run updates."
- "/proxmox:status"

## Requirements

- [Gemini CLI](https://github.com/google/gemini-cli)
- [uv](https://github.com/astral-sh/uv) (for automatic server execution)
- A Proxmox VE cluster with API Token access.

## License

MIT
