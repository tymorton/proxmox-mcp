export default {
  name: "proxmox:status",
  description: "Get a high-level summary of the Proxmox cluster nodes and VM status.",
  async execute(args, { mcp }) {
    try {
      // First, get the nodes to see the overall cluster health
      const nodesResult = await mcp.callTool("proxmox", "get_nodes", {});
      const nodes = nodesResult.content || [];

      // Next, get all VMs across the cluster
      const vmsResult = await mcp.callTool("proxmox", "get_vms", {});
      const vms = vmsResult.content || [];

      // Basic aggregation
      const onlineNodes = nodes.filter(n => n.status === "online").length;
      const runningVMs = vms.filter(v => v.status === "running").length;

      return {
        content: [
          {
            type: "text",
            text: `📊 **Proxmox Cluster Summary**

` +
                  `🖥️ **Nodes**: ${onlineNodes}/${nodes.length} Online
` +
                  `⚙️ **VMs/CTs**: ${runningVMs}/${vms.length} Running

` +
                  `Use /proxmox:nodes or /proxmox:vms for detailed lists.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `❌ **Error fetching Proxmox status**: ${error.message}`
          }
        ]
      };
    }
  }
};
