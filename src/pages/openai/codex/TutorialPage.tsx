import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { SYSTEM_NAME, BASE_URL } from '@/config/constants';

const tocItems = [
  { id: 'overview', title: '平台概览', level: 2 },
  { id: 'requirements', title: '系统需求与兼容性', level: 2 },
  { id: 'installation', title: '一键安装指南', level: 2 },
  { id: 'api-config', title: 'OranAI API 配置指南', level: 2 },
  { id: 'quickstart', title: '快速启动与验证', level: 2 },
  { id: 'sandbox', title: '安全策略与沙箱管理', level: 2 },
  { id: 'troubleshooting', title: '故障排除与技术支持', level: 2 },
  { id: 'advanced', title: '高级功能与最佳实践', level: 2 },
  { id: 'resources', title: '资源与社区', level: 2 },
];

export function CodexTutorialPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">Codex 配置使用教程</h1>
          <CopyPageDropdown pageTitle="Codex 配置使用教程" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <img src="https://img.shields.io/badge/version-v1.0-blue" alt="Version" />
          <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
          <img src="https://img.shields.io/badge/API-OranAI%20API-orange" alt="API" />
          <img src="https://img.shields.io/badge/platform-multi--platform-lightgrey" alt="Platform" />
        </div>

        <Blockquote variant="info">
          <strong>Open AI 下的 Codex 编程工具</strong> - 基于官方 Codex 配置 OranAI API 中转的强大AI编程工具！
        </Blockquote>

        {/* Platform Overview */}
        <section id="overview" className="mt-10">
          <h2 className="doc-heading-h2">平台概览</h2>
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
{`👨‍💻 开发者 → 💻 Codex CLI → 🍊 OranAI API → 🤖 AI 模型引擎
                                    ↓
              ┌────────────────────┼────────────────────┐
              ↓                    ↓                    ↓
         智能代码生成          代码分析           自动化重构
              └────────────────────┴────────────────────┘
                                    ↓
                               📁 项目文件`}
            </pre>
          </div>
        </section>

        {/* System Requirements */}
        <section id="requirements" className="mt-10">
          <h2 className="doc-heading-h2">系统需求与兼容性</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">📦 组件</th>
                  <th className="text-left py-3 px-4 font-semibold">📋 需求</th>
                  <th className="text-left py-3 px-4 font-semibold">⭐ 推荐配置</th>
                  <th className="text-left py-3 px-4 font-semibold">💡 优化建议</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">🖥️ 操作系统</td>
                  <td className="py-3 px-4">macOS 12+ / Ubuntu 20.04+ / Windows 10+ (WSL2)</td>
                  <td className="py-3 px-4">macOS 13+ / Ubuntu 22.04+</td>
                  <td className="py-3 px-4">使用 SSD 存储提升性能</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">📊 Git</td>
                  <td className="py-3 px-4">2.23+ (可选)</td>
                  <td className="py-3 px-4">2.40+</td>
                  <td className="py-3 px-4">启用 PR 助手功能</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">🧠 内存</td>
                  <td className="py-3 px-4">4 GB 最低</td>
                  <td className="py-3 px-4">8 GB+</td>
                  <td className="py-3 px-4">16 GB 适合大型项目</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">🟢 Node.js</td>
                  <td className="py-3 px-4">18+</td>
                  <td className="py-3 px-4">22+ LTS</td>
                  <td className="py-3 px-4">使用 nvm 管理版本</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">💾 存储空间</td>
                  <td className="py-3 px-4">500 MB</td>
                  <td className="py-3 px-4">2 GB</td>
                  <td className="py-3 px-4">预留日志和缓存空间</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mt-10">
          <h2 className="doc-heading-h2">1. 一键安装指南</h2>
          
          <h3 className="doc-heading-h3">📦 NPM 包安装 (通用推荐)</h3>
          <CodeBlock
            language="bash"
            title="NPM"
            code={`# 🚀 全局安装
npm i -g @openai/codex

# 备用方案
# npm i -g @openai/codex@native

# ✅ 验证安装
codex --version`}
          />

          <h3 className="doc-heading-h3">🍺 Homebrew 安装 (macOS 推荐)</h3>
          <CodeBlock
            language="bash"
            title="Homebrew"
            code={`# 🔄 更新 Homebrew
brew update && brew upgrade

# 📥 安装 Codex
brew install codex

# ✅ 验证安装
codex --version`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">Homebrew 专属功能：</p>
          <CodeBlock
            language="bash"
            code={`brew services start codex    # 后台服务
brew upgrade codex          # 升级版本`}
          />

          <h3 className="doc-heading-h3 mt-8">🔧 故障排除与优化</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">❌ 问题</th>
                  <th className="text-left py-3 px-4 font-semibold">✅ 解决方案</th>
                  <th className="text-left py-3 px-4 font-semibold">🛡️ 预防措施</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>codex</InlineCode> 命令不存在</td>
                  <td className="py-3 px-4"><InlineCode>npm config get prefix</InlineCode> 检查PATH</td>
                  <td className="py-3 px-4">使用 <InlineCode>npx @openai/codex</InlineCode></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Node 版本过旧</td>
                  <td className="py-3 px-4"><InlineCode>nvm install 22 && nvm use 22</InlineCode></td>
                  <td className="py-3 px-4">配置自动版本切换</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">权限问题</td>
                  <td className="py-3 px-4"><InlineCode>sudo npm i -g @openai/codex</InlineCode></td>
                  <td className="py-3 px-4">配置 npm 全局目录</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* API Configuration */}
        <section id="api-config" className="mt-10">
          <h2 className="doc-heading-h2">2. OranAI API 配置指南</h2>

          <h3 className="doc-heading-h3">🔑 账户注册</h3>
          <Blockquote variant="tip">
            <strong>快速注册</strong>：访问 <a href="https://models.photog.art" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://models.photog.art</a>
          </Blockquote>

          <h3 className="doc-heading-h3">🔐 API 密钥管理</h3>
          <p className="text-muted-foreground text-[15px] mb-4">
            <strong className="text-foreground">操作步骤：</strong>
          </p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-[15px] mb-4">
            <li>登录控制台：<InlineCode>https://models.photog.art/panel</InlineCode></li>
            <li>生成 API Key，密钥格式示例：<InlineCode>sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</InlineCode></li>
          </ol>

          <Blockquote variant="warning">
            <strong>安全最佳实践：</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>🔄 定期轮换 API 密钥</li>
              <li>🔒 使用环境变量存储</li>
              <li>📊 设置合理的使用限额</li>
              <li>🚫 避免在代码中硬编码</li>
            </ul>
          </Blockquote>

          <h3 className="doc-heading-h3">⚙️ Codex 配置</h3>
          <p className="text-muted-foreground text-[15px] mb-4">
            Codex 启动时会在 <InlineCode>~/.codex/</InlineCode> 读取 <InlineCode>config.toml</InlineCode> 和 <InlineCode>auth.json</InlineCode> 这两个文件。
          </p>
          <CodeBlock
            language="bash"
            title="初始化配置目录"
            code={`mkdir -p ~/.codex
nano ~/.codex/config.toml`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">config.toml 配置模板：</p>
          <CodeBlock
            language="toml"
            title="config.toml"
            code={`# ⚙️ 核心设置
model = "gpt-5"    # 默认AI模型
model_provider = "oranai"  # 服务提供商
model_reasoning_effort = "high"
disable_response_storage = true

[model_providers.oranai]
name = "oranai"
base_url = "https://models.photog.art/v1"
env_key = "CODEX_API_KEY"    
wire_api = "responses"`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">auth.json 配置模板：</p>
          <CodeBlock
            language="json"
            title="auth.json"
            code={`{
  "OPENAI_API_KEY": null  // 填 null 就可以了
}`}
          />

          <h3 className="doc-heading-h3">🌐 环境变量配置</h3>
          <CodeBlock
            language="bash"
            title="环境配置"
            code={`# ~/.bashrc 或 ~/.zshrc
echo 'export CODEX_API_KEY=sk-MP***' >> ~/.bashrc # 配置 OranAI API key

# 🔄 重新加载环境
source ~/.bashrc`}
          />
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="mt-10">
          <h2 className="doc-heading-h2">3. 快速启动与验证</h2>
          <CodeBlock
            language="bash"
            code={`codex`}
          />

          <h3 className="doc-heading-h3">💡 使用示例</h3>
          
          <p className="text-sm font-semibold text-foreground mb-2 mt-4">开发调试场景：</p>
          <CodeBlock
            language="bash"
            title="开发调试"
            code={`# 🔍 代码分析与修复
codex --profile developer "分析这个 bug 并提供修复方案"

# 📝 代码文档生成
codex "为当前项目生成完整的 API 文档"

# ⚡ 重构优化
codex "重构这个函数，提高性能并添加错误处理"`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">项目构建场景：</p>
          <CodeBlock
            language="bash"
            title="项目构建"
            code={`# 🚀 快速原型开发
codex --full-auto "创建一个 React Todo 应用的完整脚手架"

# 🧪 测试用例生成
codex "为所有 API 端点生成完整的测试用例"

# 🔧 CI/CD 管道配置
codex "设置 GitHub Actions 用于自动化测试和部署"`}
          />
        </section>

        {/* Sandbox Security */}
        <section id="sandbox" className="mt-10">
          <h2 className="doc-heading-h2">4. 安全策略与沙箱管理</h2>
          
          <h3 className="doc-heading-h3">🛡️ 沙箱安全级别</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">🔒 级别</th>
                  <th className="text-left py-3 px-4 font-semibold">📋 适用场景</th>
                  <th className="text-left py-3 px-4 font-semibold">🔐 权限范围</th>
                  <th className="text-left py-3 px-4 font-semibold">🌐 网络访问</th>
                  <th className="text-left py-3 px-4 font-semibold">💡 推荐用途</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>read-only</InlineCode></td>
                  <td className="py-3 px-4">📖 代码审查</td>
                  <td className="py-3 px-4">仅读取文件</td>
                  <td className="py-3 px-4">🚫 禁止</td>
                  <td className="py-3 px-4">安全的代码分析</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>workspace-write</InlineCode></td>
                  <td className="py-3 px-4">💻 项目开发</td>
                  <td className="py-3 px-4">写入项目文件</td>
                  <td className="py-3 px-4">🚫 禁止</td>
                  <td className="py-3 px-4">日常开发工作</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><InlineCode>danger-full-access</InlineCode></td>
                  <td className="py-3 px-4">⚠️ 系统管理</td>
                  <td className="py-3 px-4">完全系统权限</td>
                  <td className="py-3 px-4">✅ 允许</td>
                  <td className="py-3 px-4">高级系统配置</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-h3 mt-6">📋 策略配置</h3>
          <CodeBlock
            language="bash"
            title="动态策略调整"
            code={`# 临时提升权限（当前会话）
codex --sandbox danger-full-access --approve-all "系统维护任务"

# 降级权限
codex --sandbox read-only "安全代码审查"

# 批量操作模式
codex --batch-mode --auto-confirm "自动化脚本执行"`}
          />
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mt-10">
          <h2 className="doc-heading-h2">5. 故障排除与技术支持</h2>
          
          <h3 className="doc-heading-h3">🔐 API 认证问题</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">🔢 错误代码</th>
                  <th className="text-left py-3 px-4 font-semibold">📋 问题描述</th>
                  <th className="text-left py-3 px-4 font-semibold">✅ 解决方案</th>
                  <th className="text-left py-3 px-4 font-semibold">🛡️ 预防措施</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>401 Unauthorized</InlineCode></td>
                  <td className="py-3 px-4">API Key 无效</td>
                  <td className="py-3 px-4">重新生成密钥</td>
                  <td className="py-3 px-4">定期轮换密钥</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>403 Forbidden</InlineCode></td>
                  <td className="py-3 px-4">余额不足/权限不够</td>
                  <td className="py-3 px-4">充值账户/升级权限</td>
                  <td className="py-3 px-4">设置余额警报</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><InlineCode>429 Too Many Requests</InlineCode></td>
                  <td className="py-3 px-4">请求频率过高</td>
                  <td className="py-3 px-4">降低并发数</td>
                  <td className="py-3 px-4">配置请求限流</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-h3 mt-6">🌐 网络连接问题</h3>
          <CodeBlock
            language="bash"
            title="连接状态检查"
            code={`# 网络连通性测试
ping -c 4 models.photog.art

# 端口连接测试
telnet models.photog.art 443

# DNS 解析检查
nslookup models.photog.art`}
          />

          <h3 className="doc-heading-h3 mt-6">📄 配置文件问题</h3>
          <CodeBlock
            language="bash"
            title="配置验证命令"
            code={`# ✅ 配置文件语法检查
codex config validate

# 🔍 配置文件调试
codex config debug --verbose

# 🔄 重置配置文件
codex config reset --backup`}
          />
        </section>

        {/* Advanced Features */}
        <section id="advanced" className="mt-10">
          <h2 className="doc-heading-h2">6. 高级功能与最佳实践</h2>
          
          <h3 className="doc-heading-h3">🔌 模型上下文协议 (MCP)</h3>
          <p className="text-muted-foreground text-[15px] mb-4">
            MCP 允许 Codex 连接外部服务和数据源，扩展 AI 助手的功能边界。
          </p>
          <CodeBlock
            language="toml"
            title="MCP 服务器配置"
            code={`# ~/.codex/config.toml 中的 MCP 配置
[mcp_servers.database]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-postgres"]
env = { 
    "DATABASE_URL" = "\${DATABASE_URL}",
    "POSTGRES_USER" = "\${DB_USER}"
}

[mcp_servers.filesystem]
command = "npx" 
args = ["-y", "@modelcontextprotocol/server-filesystem"]
env = {
    "ALLOWED_DIRECTORIES" = "/workspace,/home/user/projects"
}

[mcp_servers.web_search]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-brave-search"]
env = {
    "BRAVE_API_KEY" = "\${BRAVE_API_KEY}"
}`}
          />

          <h3 className="doc-heading-h3">🔄 CI/CD 集成</h3>
          <CodeBlock
            language="yaml"
            title="GitHub Actions 工作流"
            code={`# .github/workflows/codex-ai-review.yml
name: AI Code Review with Codex

on:
  pull_request:
    branches: [main, develop]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Install Codex CLI
        run: npm install -g @openai/codex
      
      - name: AI Code Review
        env:
          CODEX_API_KEY: \${{ secrets.CODEX_API_KEY }}
        run: |
          codex exec --profile production \\
            "Review this PR for security issues, performance problems, and code quality."`}
          />

          <h3 className="doc-heading-h3">⚡ 性能优化配置</h3>
          <CodeBlock
            language="toml"
            title="高性能配置模板"
            code={`# 高性能配置模板
[performance]
cache_enabled = true
cache_size = "1GB"
concurrent_requests = 5
request_timeout = 60
streaming = true
compression = true

[performance.optimization]
lazy_loading = true
memory_limit = "2GB"
gc_threshold = 0.8
worker_threads = 4

# 🎯 模型特定优化
[model_providers.oranai.performance]
batch_processing = true
context_window = 128000
temperature = 0.1
max_tokens = 4096`}
          />
        </section>

        {/* Resources */}
        <section id="resources" className="mt-10">
          <h2 className="doc-heading-h2">7. 资源与社区</h2>
          
          <h3 className="doc-heading-h3">📚 相关链接</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">📦 资源</th>
                  <th className="text-left py-3 px-4 font-semibold">📋 描述</th>
                  <th className="text-left py-3 px-4 font-semibold">🔗 链接</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">🏠 官方主页</td>
                  <td className="py-3 px-4">OranAI API 服务</td>
                  <td className="py-3 px-4"><a href="https://models.photog.art" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://models.photog.art</a></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground">📖 GitHub 仓库</td>
                  <td className="py-3 px-4">Codex CLI 开源项目</td>
                  <td className="py-3 px-4"><a href="https://github.com/openai/codex" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/openai/codex</a></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">💬 API 文档</td>
                  <td className="py-3 px-4">技术文档和接口说明</td>
                  <td className="py-3 px-4"><a href="https://models.photog.art/docs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://models.photog.art/docs</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-10">
          <h2 className="doc-heading-h2">🎉 结语</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
            恭喜！您现在已经掌握了 <strong className="text-foreground">Codex CLI</strong> 的完整使用方法。这个强大的 AI 编程助手将显著提升您的开发效率和代码质量。
          </p>

          <Blockquote variant="tip">
            <strong>专业建议：</strong> 开始时使用 <InlineCode>workspace-write</InlineCode> 沙箱模式，熟悉后再考虑其他安全级别。
          </Blockquote>

          <Blockquote variant="info">
            <strong>效率提升：</strong> 善用 Profile 功能，为不同项目和场景创建专门的配置。
          </Blockquote>

          <Blockquote variant="warning">
            <strong>安全第一：</strong> 始终使用环境变量管理 API 密钥，避免硬编码。
          </Blockquote>
        </section>

        {/* Footer */}
        <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border text-center">
          <p className="text-muted-foreground text-[15px]">
            <strong className="text-foreground">感谢使用 OranAI API + Codex</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            让 AI 成为您编程路上最得力的助手 ✨
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <img src="https://img.shields.io/github/stars/openai/codex?style=social" alt="GitHub Stars" />
          </div>
        </div>

        <PageNavigation />
      </article>

      <TableOfContents items={tocItems} />
    </div>
  );
}
