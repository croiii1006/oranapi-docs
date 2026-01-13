import { NavItem } from '@/types/navigation';

export const navigationData: NavItem[] = [
  {
    id: 'introduction',
    title: '介绍',
    path: '/introduction',
  },
  {
    id: 'system',
    title: '系统接口',
    children: [
      { id: 'user-info', title: '用户查询账户信息', path: '/system/user-info', method: 'GET' },
      { id: 'key-info', title: '查询key信息', path: '/system/key-info', method: 'GET' },
    ],
  },
  {
    id: 'openai',
    title: 'OpenAI',
    children: [
      { id: 'openai-intro', title: '项目说明', path: '/openai/introduction' },
      {
        id: 'codex',
        title: 'CodeX',
        children: [
          { id: 'codex-tutorial', title: 'Codex 配置使用教程', path: '/openai/codex/tutorial' },
        ],
      },
      {
        id: 'openai-chat',
        title: '聊天 (Chat)',
        children: [
          { id: 'gpts-request', title: 'gpts 请求', path: '/openai/chat/gpts' },
          { id: 'chat-chunk', title: '聊天完成块对象', path: '/openai/chat/chunk' },
          { id: 'create-chat', title: '创建聊天补全', path: '/openai/chat/completions', method: 'POST' },
        ],
      },
      {
        id: 'openai-images',
        title: '图像 (Images)',
        children: [
          { id: 'images-readme', title: 'README', path: '/openai/images/readme' },
          { id: 'image-object', title: '图像对象', path: '/openai/images/object' },
          { id: 'create-image', title: '创建图像', path: '/openai/images/create', method: 'POST' },
          { id: 'edit-image', title: '创建图片编辑', path: '/openai/images/edit', method: 'POST' },
          { id: 'variation-image', title: '创建图像变体', path: '/openai/images/variation', method: 'POST', isNew: true },
        ],
      },
      {
        id: 'openai-audio',
        title: '音频 (Audio)',
        children: [
          { id: 'create-speech', title: '创建语音', path: '/openai/audio/speech', method: 'POST' },
          { id: 'create-transcription', title: '创建音频转文本', path: '/openai/audio/transcription', method: 'POST' },
          { id: 'create-translation', title: '创建翻译', path: '/openai/audio/translation', method: 'POST' },
        ],
      },
      {
        id: 'openai-completions',
        title: '自动补全 (Completions)',
        children: [
          { id: 'completion-object', title: '完成对象', path: '/openai/completions/object' },
          { id: 'create-completion', title: '创建完成', path: '/openai/completions/create', method: 'POST' },
        ],
      },
      {
        id: 'openai-embeddings',
        title: '嵌入 (Embeddings)',
        children: [
          { id: 'embedding-object', title: '嵌入对象', path: '/openai/embeddings/object' },
          { id: 'create-embedding', title: '创建嵌入', path: '/openai/embeddings/create', method: 'POST', isNew: true },
        ],
      },
      {
        id: 'openai-finetuning',
        title: '微调 (Fine-tuning)',
        children: [
          { id: 'finetune-job-object', title: '微调作业对象', path: '/openai/finetuning/job-object' },
          { id: 'finetune-event-object', title: '微调作业事件对象', path: '/openai/finetuning/event-object' },
          { id: 'create-finetune', title: '创建微调作业', path: '/openai/finetuning/create', method: 'POST', isNew: true },
          { id: 'list-finetune', title: '列出微调作业', path: '/openai/finetuning/list', method: 'GET', isNew: true },
          { id: 'retrieve-finetune', title: '检索微调作业', path: '/openai/finetuning/retrieve', method: 'GET', isNew: true },
          { id: 'cancel-finetune', title: '取消微调', path: '/openai/finetuning/cancel', method: 'POST', isNew: true },
          { id: 'list-finetune-events', title: '列出微调事件', path: '/openai/finetuning/events', method: 'GET', isNew: true },
        ],
      },
      {
        id: 'openai-models',
        title: '模型 (Models)',
        children: [
          { id: 'model-object', title: '模型对象', path: '/openai/models/object' },
          { id: 'list-models', title: '列出模型', path: '/openai/models/list', method: 'GET' },
          { id: 'retrieve-model', title: '检索模型', path: '/openai/models/retrieve', method: 'GET' },
          { id: 'delete-model', title: '删除微调模型', path: '/openai/models/delete', method: 'GET' },
        ],
      },
      {
        id: 'openai-files',
        title: '文件 (Files)',
        children: [
          { id: 'files-readme', title: 'README', path: '/openai/files/readme' },
          { id: 'file-object', title: '文件对象', path: '/openai/files/object' },
          { id: 'upload-file', title: '上传文件', path: '/openai/files/upload', method: 'POST', isNew: true },
          { id: 'delete-file', title: '删除文件', path: '/openai/files/delete', method: 'DELETE', isNew: true },
          { id: 'retrieve-file', title: '检索文件', path: '/openai/files/retrieve', method: 'GET', isNew: true },
          { id: 'retrieve-file-content', title: '检索文件内容', path: '/openai/files/content', method: 'GET', isNew: true },
          { id: 'list-files', title: '列出文件', path: '/openai/files/list', method: 'GET', isNew: true },
        ],
      },
      {
        id: 'openai-moderations',
        title: '审查 (Moderations)',
        children: [
          { id: 'moderation-object', title: '调节对象', path: '/openai/moderations/object' },
          { id: 'create-moderation', title: '创建内容审核', path: '/openai/moderations/create', method: 'POST', isNew: true },
        ],
      },
    ],
  },
  {
    id: 'beta',
    title: '进阶/待开发',
    children: [
      { id: 'assistants-beta', title: '助手测试版 (AssistantsBeta)', path: '/beta/assistants', isNew: true },
      { id: 'threads', title: '线程数 (Threads)', path: '/beta/threads', isNew: true },
      { id: 'messages', title: '留言 (Messages)', path: '/beta/messages', isNew: true },
      { id: 'runs', title: '运行 (Runs)', path: '/beta/runs', isNew: true },
      { id: 'audio-deprecated', title: '已弃用-音频 (Audio)', path: '/beta/audio-deprecated', isDeprecated: true },
    ],
  },
  {
    id: 'anthropic',
    title: 'Anthropic',
    children: [
      {
        id: 'anthropic-chat',
        title: '聊天 (chat)',
        children: [
          { id: 'claude', title: 'Claude', path: '/anthropic/chat/claude', method: 'POST' },
        ],
      },
    ],
  },
  {
    id: 'google',
    title: 'Google',
    children: [
      {
        id: 'google-chat',
        title: '聊天 (chat)',
        children: [
          { id: 'generate-content', title: '生成内容', path: '/google/chat/generate', method: 'POST' },
          { id: 'generate-content-stream', title: '生成内容 (流式)', path: '/google/chat/stream', method: 'POST', isNew: true },
        ],
      },
      {
        id: 'google-image',
        title: '图像 (image)',
        children: [
          { id: 'google-generate-image', title: '生成图像', path: '/google/image/generate', method: 'POST' },
          { id: 'google-generate-image-stream', title: '生成图像 (流式)', path: '/google/image/stream', method: 'POST', isNew: true },
        ],
      },
      {
        id: 'google-analyze',
        title: '分析视频/音频/PDF',
        children: [
          { id: 'analyze-media', title: '分析 视频/音频/PDF', path: '/google/analyze/media', method: 'POST' },
          { id: 'analyze-youtube', title: '分析 视频 (YouTube)', path: '/google/analyze/youtube', method: 'POST' },
        ],
      },
    ],
  },
  {
    id: 'anthropic-2',
    title: 'Anthropic',
    children: [
      {
        id: 'anthropic-2-chat',
        title: '聊天',
        children: [
          { id: 'claude-messages', title: 'Claude (Messages API)', path: '/anthropic-2/chat/messages', method: 'POST', isNew: true },
        ],
      },
    ],
  },
  {
    id: 'image-generation',
    title: '图片生成',
    children: [
      {
        id: 'gpt-image',
        title: 'gpt-image-1.5/gpt-4o-image',
        children: [
          {
            id: 'gpt-image-chat',
            title: 'chat 格式',
            children: [
              { id: 'gpt-image-with-image', title: '生成图片（传图）', path: '/image-generation/gpt-image/chat/with-image', method: 'POST' },
              { id: 'gpt-image-generate', title: '生成图片', path: '/image-generation/gpt-image/chat/generate', method: 'POST' },
            ],
          },
          {
            id: 'gpt-image-dalle',
            title: 'image/generations 格式（dalle格式）',
            children: [
              { id: 'gpt-image-dalle-create', title: '创建图像', path: '/image-generation/gpt-image/dalle/create', method: 'POST', isNew: true },
              { id: 'gpt-image-dalle-edit', title: '创建图像编辑', path: '/image-generation/gpt-image/dalle/edit', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'nano-banana',
        title: 'nano-banana',
        children: [
          {
            id: 'nano-chat',
            title: 'chat 格式',
            children: [
              { id: 'nano-with-image', title: '创建图片（传图）', path: '/image-generation/nano-banana/chat/with-image', method: 'POST' },
              { id: 'nano-generate', title: '创建图片', path: '/image-generation/nano-banana/chat/generate', method: 'POST' },
            ],
          },
          {
            id: 'nano-dalle',
            title: 'image/generations 格式（dalle格式）',
            children: [
              { id: 'nano-dalle-create', title: '创建图像', path: '/image-generation/nano-banana/dalle/create', method: 'POST', isNew: true },
              { id: 'nano-dalle-edit', title: '创建图像编辑', path: '/image-generation/nano-banana/dalle/edit', method: 'POST' },
            ],
          },
          {
            id: 'nano-google',
            title: '谷歌官方格式',
            children: [
              { id: 'nano-google-generate', title: '生成图像', path: '/image-generation/nano-banana/google/generate', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'midjourney',
        title: 'Midjourney',
        children: [
          {
            id: 'mj-query',
            title: '任务查询',
            children: [
              { id: 'mj-query-batch', title: '根据id列表查询多个任务', path: '/image-generation/midjourney/query/batch', method: 'POST' },
              { id: 'mj-query-single', title: '查询任务', path: '/image-generation/midjourney/query/single', method: 'GET' },
              { id: 'mj-query-seed', title: '查询图片Seed', path: '/image-generation/midjourney/query/seed', method: 'GET' },
            ],
          },
          {
            id: 'mj-submit',
            title: '任务提交',
            children: [
              { id: 'mj-imagine', title: '提交 Imagine 任务', path: '/image-generation/midjourney/submit/imagine', method: 'POST' },
              { id: 'mj-blend', title: '提交 Blend 任务', path: '/image-generation/midjourney/submit/blend', method: 'POST' },
              { id: 'mj-swapface', title: '提交 SwapFace 任务', path: '/image-generation/midjourney/submit/swapface', method: 'POST' },
              { id: 'mj-describe', title: '提交 Describe 任务', path: '/image-generation/midjourney/submit/describe', method: 'POST' },
              { id: 'mj-shorten', title: '提交 Shorten 任务', path: '/image-generation/midjourney/submit/shorten', method: 'POST' },
              { id: 'mj-modal', title: '提交 Modal 任务', path: '/image-generation/midjourney/submit/modal', method: 'POST' },
              { id: 'mj-action', title: '提交 Action 任务', path: '/image-generation/midjourney/submit/action', method: 'POST' },
              { id: 'mj-change', title: '提交 Change 任务', path: '/image-generation/midjourney/submit/change', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'flux',
        title: 'flux',
        children: [
          {
            id: 'flux-official',
            title: '官方格式',
            children: [
              { id: 'flux-prompt', title: '提示词生成', path: '/image-generation/flux/official/prompt', method: 'POST' },
              { id: 'flux-generate', title: '生成图像', path: '/image-generation/flux/official/generate', method: 'POST' },
              { id: 'flux-query', title: '查询任务', path: '/image-generation/flux/official/query', method: 'GET' },
            ],
          },
          {
            id: 'flux-openai',
            title: 'OpenAI Image 格式',
            children: [
              { id: 'flux-openai-generate', title: '生成图像（generations）', path: '/image-generation/flux/openai/generate', method: 'POST' },
              { id: 'flux-openai-edit', title: '图片编辑（edit）', path: '/image-generation/flux/openai/edit', method: 'POST' },
            ],
          },
          {
            id: 'flux-chat',
            title: 'Chat 格式',
            children: [
              { id: 'flux-chat-generate', title: '生成图像（chat）', path: '/image-generation/flux/chat/generate', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'seedream',
        title: 'Seedream (即梦)',
        children: [
          {
            id: 'seedream-chat',
            title: 'chat 格式',
            children: [
              { id: 'seedream-chat-generate', title: '生成图像', path: '/image-generation/seedream/chat/generate', method: 'POST' },
            ],
          },
          {
            id: 'seedream-image',
            title: 'image 格式',
            children: [
              { id: 'seedream-image-create', title: '创建图片', path: '/image-generation/seedream/image/create', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'kling-image',
        title: 'kling (可灵)',
        children: [
          { id: 'kling-image-generate', title: '图像生成', path: '/image-generation/kling/generate', method: 'POST' },
          { id: 'kling-image-query', title: '查询任务', path: '/image-generation/kling/query', method: 'GET' },
        ],
      },
      {
        id: 'ideogram',
        title: 'ideogram',
        children: [
          {
            id: 'ideogram-openai',
            title: 'openai images 格式',
            children: [
              { id: 'ideogram-openai-generate', title: '生成', path: '/image-generation/ideogram/openai/generate', method: 'POST' },
            ],
          },
          {
            id: 'ideogram-chat',
            title: 'openchat chat 格式',
            children: [
              { id: 'ideogram-chat-generate', title: '生成', path: '/image-generation/ideogram/chat/generate', method: 'POST' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'video-generation',
    title: '视频生成',
    children: [
      {
        id: 'sora',
        title: 'sora',
        children: [
          { id: 'sora-characters', title: '可以@ 的人物说明', path: '/video-generation/sora/characters' },
          {
            id: 'sora-official',
            title: '官方格式',
            children: [
              { id: 'sora-generate', title: '生成视频', path: '/video-generation/sora/official/generate', method: 'POST' },
              { id: 'sora-edit', title: '编辑视频', path: '/video-generation/sora/official/edit', method: 'POST' },
              { id: 'sora-create-character', title: '从已经生成任务中创建角色', path: '/video-generation/sora/official/create-character', method: 'POST' },
              { id: 'sora-storyboard', title: '使用故事板创建视频', path: '/video-generation/sora/official/storyboard', method: 'POST' },
              { id: 'sora-query-video', title: '查询视频', path: '/video-generation/sora/official/query-video', method: 'GET' },
              { id: 'sora-query-character', title: '查询角色', path: '/video-generation/sora/official/query-character', method: 'GET' },
              { id: 'sora-download', title: '下载视频', path: '/video-generation/sora/official/download', method: 'GET' },
            ],
          },
          {
            id: 'sora-openai-chat',
            title: 'openai chat 格式',
            children: [
              { id: 'sora-chat-public', title: '生成视频（使用公共人物）', path: '/video-generation/sora/chat/public', method: 'POST' },
              { id: 'sora-chat-generate', title: '生成视频', path: '/video-generation/sora/chat/generate', method: 'POST' },
              { id: 'sora-chat-with-image', title: '生成视频（传图）', path: '/video-generation/sora/chat/with-image', method: 'POST' },
              { id: 'sora-chat-edit', title: '连续修改生成的视频', path: '/video-generation/sora/chat/edit', method: 'POST' },
            ],
          },
          {
            id: 'sora-unified',
            title: '视频统一格式',
            children: [
              { id: 'sora-unified-create', title: '创建视频（带 Character）', path: '/video-generation/sora/unified/create', method: 'GET', isDeprecated: true },
            ],
          },
        ],
      },
      {
        id: 'veo',
        title: 'veo',
        children: [
          {
            id: 'veo-unified',
            title: '视频统一格式',
            children: [
              { id: 'veo-generate', title: '生成视频', path: '/video-generation/veo/unified/generate', method: 'POST' },
              { id: 'veo-query', title: '查询视频', path: '/video-generation/veo/unified/query', method: 'GET' },
              { id: 'veo-create-deprecated', title: '创建视频', path: '/video-generation/veo/unified/create', method: 'POST', isDeprecated: true },
              { id: 'veo-task-deprecated', title: '查询任务', path: '/video-generation/veo/unified/task', method: 'GET', isDeprecated: true },
              { id: 'veo-with-image-deprecated', title: '创建视频，带图片', path: '/video-generation/veo/unified/with-image', method: 'POST', isDeprecated: true },
            ],
          },
          {
            id: 'veo-chat',
            title: 'chat 格式',
            children: [
              { id: 'veo-chat-stream', title: '流式请求', path: '/video-generation/veo/chat/stream', method: 'POST' },
              { id: 'veo-chat-non-stream', title: '非流请求', path: '/video-generation/veo/chat/non-stream', method: 'POST', isDeprecated: true },
              { id: 'veo-chat-with-image', title: '带图片请求', path: '/video-generation/veo/chat/with-image', method: 'POST', isDeprecated: true },
            ],
          },
        ],
      },
      {
        id: 'kling-video',
        title: 'kling（可灵）',
        children: [
          {
            id: 'kling-video-official',
            title: '官方格式',
            children: [
              { id: 'kling-text-to-video', title: '文生视频', path: '/video-generation/kling/official/text-to-video', method: 'POST' },
              { id: 'kling-image-to-video', title: '图生视频', path: '/video-generation/kling/official/image-to-video', method: 'POST' },
              { id: 'kling-effects', title: '视频特效', path: '/video-generation/kling/official/effects', method: 'POST' },
              { id: 'kling-query-task', title: '查询任务', path: '/video-generation/kling/official/query-task', method: 'GET' },
              { id: 'kling-query-effects', title: '查询任务（特效）', path: '/video-generation/kling/official/query-effects', method: 'GET' },
            ],
          },
          {
            id: 'kling-video-openai',
            title: 'openai-videos格式',
            children: [
              { id: 'kling-openai-generate', title: '生成视频', path: '/video-generation/kling/openai/generate', method: 'POST' },
              { id: 'kling-openai-query', title: '查询视频', path: '/video-generation/kling/openai/query', method: 'GET' },
            ],
          },
        ],
      },
      {
        id: 'mj-video',
        title: 'midjourney',
        children: [
          { id: 'mj-video-submit', title: '提交Video任务', path: '/video-generation/midjourney/submit', method: 'POST' },
          { id: 'mj-video-query', title: '查询Video任务', path: '/video-generation/midjourney/query', method: 'GET' },
        ],
      },
      {
        id: 'vidu',
        title: 'vidu(官方格式)',
        children: [
          {
            id: 'vidu-normal',
            title: '普通',
            children: [
              { id: 'vidu-chat', title: 'vidu(chat格式)', path: '/video-generation/vidu/normal/chat', method: 'POST' },
              { id: 'vidu-tasks', title: '创建视频(tasks)', path: '/video-generation/vidu/normal/tasks', method: 'POST' },
              { id: 'vidu-state', title: '视频状态(state)', path: '/video-generation/vidu/normal/state', method: 'GET' },
              { id: 'vidu-tasks-get', title: '视频查询(tasks-get)', path: '/video-generation/vidu/normal/tasks-get', method: 'GET' },
              { id: 'vidu-hd', title: '高清视频(tasks)', path: '/video-generation/vidu/normal/hd', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'luma',
        title: 'luma',
        children: [
          {
            id: 'luma-official',
            title: 'luma(官方格式)',
            children: [
              {
                id: 'luma-vip',
                title: '官方格式lumavip⚡',
                children: [
                  { id: 'luma-vip-chat', title: 'Chat格式lumavip', path: '/video-generation/luma/official/vip/chat', method: 'POST' },
                  { id: 'luma-vip-generate', title: '视频生成(generations)', path: '/video-generation/luma/official/vip/generate', method: 'POST' },
                  { id: 'luma-vip-query', title: '查询任务(task)', path: '/video-generation/luma/official/vip/query', method: 'GET' },
                  { id: 'luma-vip-extend', title: '视频扩展(extend)', path: '/video-generation/luma/official/vip/extend', method: 'POST' },
                ],
              },
              {
                id: 'luma-pro',
                title: '官方格式lumapro🚀（优先保证稳定性）',
                children: [
                  { id: 'luma-pro-chat', title: 'Chat格式lumapro', path: '/video-generation/luma/official/pro/chat', method: 'POST' },
                  { id: 'luma-pro-generate', title: '视频生成(generations)', path: '/video-generation/luma/official/pro/generate', method: 'POST' },
                  { id: 'luma-pro-query', title: '查询任务(task)', path: '/video-generation/luma/official/pro/query', method: 'GET' },
                  { id: 'luma-pro-extend', title: '视频扩展(extend)', path: '/video-generation/luma/official/pro/extend', method: 'POST' },
                ],
              },
              {
                id: 'luma-standard',
                title: '官方格式luma',
                children: [
                  { id: 'luma-std-chat', title: 'Chat格式luma', path: '/video-generation/luma/official/standard/chat', method: 'POST' },
                  { id: 'luma-std-generate', title: '视频生成(generations)', path: '/video-generation/luma/official/standard/generate', method: 'POST' },
                  { id: 'luma-std-query', title: '查询任务(task)', path: '/video-generation/luma/official/standard/query', method: 'GET' },
                  { id: 'luma-std-extend', title: '视频拓展(extend)', path: '/video-generation/luma/official/standard/extend', method: 'POST' },
                ],
              },
            ],
          },
          {
            id: 'luma-goamz',
            title: 'luma(goamz格式)',
            children: [
              {
                id: 'luma-goamz-standard',
                title: 'goamz 格式luma',
                children: [
                  { id: 'luma-goamz-generate', title: '视频生成(generations)', path: '/video-generation/luma/goamz/standard/generate', method: 'POST' },
                  { id: 'luma-goamz-query', title: '查询任务(task)', path: '/video-generation/luma/goamz/standard/query', method: 'GET' },
                  { id: 'luma-goamz-extend', title: '视频拓展(extend)', path: '/video-generation/luma/goamz/standard/extend', method: 'POST' },
                ],
              },
              {
                id: 'luma-goamz-vip',
                title: 'goamz 格式lumavip',
                children: [
                  { id: 'luma-goamz-vip-generate', title: '视频生成(generations)', path: '/video-generation/luma/goamz/vip/generate', method: 'POST' },
                  { id: 'luma-goamz-vip-query', title: '查询任务(task)', path: '/video-generation/luma/goamz/vip/query', method: 'GET' },
                  { id: 'luma-goamz-vip-extend', title: '视频拓展(extend)', path: '/video-generation/luma/goamz/vip/extend', method: 'POST' },
                ],
              },
            ],
          },
          {
            id: 'luma-next-web',
            title: 'luma(chatgpt-next-web格式)',
            children: [
              { id: 'luma-next-generate', title: '视频生成(generations)', path: '/video-generation/luma/next-web/generate', method: 'POST' },
              { id: 'luma-next-extend', title: '视频扩展(extend)', path: '/video-generation/luma/next-web/extend', method: 'POST' },
              { id: 'luma-next-query', title: '查询任务(task)', path: '/video-generation/luma/next-web/query', method: 'GET' },
              { id: 'luma-next-chat', title: 'Chat格式lumavip', path: '/video-generation/luma/next-web/chat', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'pika',
        title: 'pika',
        children: [
          { id: 'pika-intro', title: 'pika 接口说明', path: '/video-generation/pika/intro' },
          {
            id: 'pika-official',
            title: '官方格式',
            children: [
              { id: 'pika-generate', title: '生成视频', path: '/video-generation/pika/official/generate', method: 'POST' },
              { id: 'pika-query', title: '查询任务', path: '/video-generation/pika/official/query', method: 'GET' },
            ],
          },
          {
            id: 'pika-openai',
            title: 'openai chat 兼容格式',
            children: [
              { id: 'pika-openai-generate', title: '生成视频', path: '/video-generation/pika/openai/generate', method: 'POST' },
            ],
          },
        ],
      },
      {
        id: 'pixverse',
        title: 'pixverse(变身毒液效果等)',
        children: [
          {
            id: 'pixverse-normal',
            title: 'pixverse(官方格式)(普通)',
            children: [
              { id: 'pixverse-create', title: '创建视频', path: '/video-generation/pixverse/normal/create', method: 'POST' },
              { id: 'pixverse-query', title: '查询视频', path: '/video-generation/pixverse/normal/query', method: 'GET' },
              { id: 'pixverse-templates', title: '获取特效模版', path: '/video-generation/pixverse/normal/templates', method: 'GET' },
            ],
          },
          {
            id: 'pixverse-vip',
            title: 'pixverse(官方格式)(VIP)',
            children: [
              { id: 'pixverse-vip-create', title: '创建视频', path: '/video-generation/pixverse/vip/create', method: 'POST' },
              { id: 'pixverse-vip-query', title: '查询视频', path: '/video-generation/pixverse/vip/query', method: 'GET' },
              { id: 'pixverse-vip-templates', title: '获取特效模版', path: '/video-generation/pixverse/vip/templates', method: 'GET' },
            ],
          },
        ],
      },
      {
        id: 'runway',
        title: 'runway(暂不可用)',
        children: [
          {
            id: 'runway-official',
            title: '官方格式',
            children: [
              { id: 'runway-generate', title: '生成视频(tasks)', path: '/video-generation/runway/official/generate', method: 'POST', isNew: true },
              { id: 'runway-query', title: '查询任务', path: '/video-generation/runway/official/query', method: 'GET', isNew: true },
            ],
          },
          {
            id: 'runway-chat',
            title: 'chat 格式',
            children: [
              { id: 'runway-chat-generate', title: '生成视频', path: '/video-generation/runway/chat/generate', method: 'POST', isNew: true },
            ],
          },
          {
            id: 'runway-vip',
            title: 'vip(更快无水印)',
            children: [
              {
                id: 'runway-vip-official',
                title: '官方格式',
                children: [
                  { id: 'runway-vip-generate', title: '生成视频(tasks)', path: '/video-generation/runway/vip/official/generate', method: 'POST', isNew: true },
                  { id: 'runway-vip-query', title: '查询任务', path: '/video-generation/runway/vip/official/query', method: 'GET', isNew: true },
                ],
              },
              {
                id: 'runway-vip-chat',
                title: 'chat 格式',
                children: [
                  { id: 'runway-vip-chat-generate', title: '生成视频', path: '/video-generation/runway/vip/chat/generate', method: 'POST', isNew: true },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'music-generation',
    title: '音乐生成',
    children: [
      {
        id: 'suno',
        title: 'suno',
        children: [
          {
            id: 'suno-official',
            title: 'suno官网原生格式',
            children: [
              {
                id: 'suno-all',
                title: '官网格式',
                children: [
                  {
                    id: 'suno-all-apis',
                    title: '所有接口',
                    children: [
                      { id: 'suno-feed', title: '查询任务(feed)', path: '/music-generation/suno/official/all/feed', method: 'GET' },
                      { id: 'suno-single', title: '查询单个任务', path: '/music-generation/suno/official/all/single', method: 'GET' },
                      { id: 'suno-batch', title: '批量查询任务', path: '/music-generation/suno/official/all/batch', method: 'POST' },
                      { id: 'suno-generate', title: '生成音乐', path: '/music-generation/suno/official/all/generate', method: 'POST' },
                      { id: 'suno-lyrics', title: '生成歌词', path: '/music-generation/suno/official/all/lyrics', method: 'POST' },
                      { id: 'suno-upload', title: '音乐链接转成suno(upload)', path: '/music-generation/suno/official/all/upload', method: 'POST' },
                      { id: 'suno-concat', title: '获取完整音乐(concat)', path: '/music-generation/suno/official/all/concat', method: 'POST' },
                    ],
                  },
                ],
              },
              {
                id: 'suno-scene-1',
                title: '场景1 生成自定义音乐(带歌词)',
                children: [
                  { id: 'suno-s1-generate', title: '音乐生成(generations)', path: '/music-generation/suno/official/scene1/generate', method: 'POST' },
                  { id: 'suno-s1-feed', title: '查询任务(feed)', path: '/music-generation/suno/official/scene1/feed', method: 'GET' },
                ],
              },
              {
                id: 'suno-scene-2',
                title: '场景 2 通过提示词直接生成音乐(带歌词)',
                children: [
                  { id: 'suno-s2-generate', title: '音乐生成(generations)', path: '/music-generation/suno/official/scene2/generate', method: 'POST' },
                  { id: 'suno-s2-feed', title: '查询任务(feed)', path: '/music-generation/suno/official/scene2/feed', method: 'GET' },
                ],
              },
              {
                id: 'suno-scene-3',
                title: '场景 3 生成自定义音乐(纯音乐)',
                children: [
                  { id: 'suno-s3-generate', title: '音乐生成(generations)', path: '/music-generation/suno/official/scene3/generate', method: 'POST' },
                  { id: 'suno-s3-feed', title: '查询任务(feed)', path: '/music-generation/suno/official/scene3/feed', method: 'GET' },
                ],
              },
              {
                id: 'suno-scene-4',
                title: '场景 4 通过提示词直接生成音乐(纯音乐)',
                children: [
                  { id: 'suno-s4-generate', title: '音乐生成(generations)', path: '/music-generation/suno/official/scene4/generate', method: 'POST' },
                  { id: 'suno-s4-feed', title: '查询任务(feed)', path: '/music-generation/suno/official/scene4/feed', method: 'GET' },
                ],
              },
              {
                id: 'suno-scene-5',
                title: '场景 5 上传自定义音频并续写',
                children: [
                  { id: 'suno-s5-intro', title: '续写自定义音频步骤介绍', path: '/music-generation/suno/official/scene5/intro' },
                  { id: 'suno-s5-upload', title: '音乐链接转成suno(upload)', path: '/music-generation/suno/official/scene5/upload', method: 'POST' },
                  { id: 'suno-s5-generate', title: '音乐生成(generations)', path: '/music-generation/suno/official/scene5/generate', method: 'POST' },
                  { id: 'suno-s5-feed', title: '查询任务(feed)', path: '/music-generation/suno/official/scene5/feed', method: 'GET' },
                ],
              },
              {
                id: 'suno-scene-6',
                title: '场景 6 续写音乐并获取完整音乐',
                children: [
                  { id: 'suno-s6-step1', title: '步骤 1 音乐生成', path: '/music-generation/suno/official/scene6/step1', method: 'POST' },
                  { id: 'suno-s6-step2', title: '步骤 2 查询任务', path: '/music-generation/suno/official/scene6/step2', method: 'GET' },
                  { id: 'suno-s6-step3', title: '步骤 3 扩展音乐', path: '/music-generation/suno/official/scene6/step3', method: 'POST' },
                  { id: 'suno-s6-step4', title: '步骤 4 查询拓展的任务', path: '/music-generation/suno/official/scene6/step4', method: 'GET' },
                  { id: 'suno-s6-step5', title: '步骤 5 获取完整音乐', path: '/music-generation/suno/official/scene6/step5', method: 'POST' },
                  { id: 'suno-s6-step6', title: '步骤 6 查询完整音乐的任务', path: '/music-generation/suno/official/scene6/step6', method: 'GET' },
                ],
              },
              {
                id: 'suno-scene-7',
                title: '场景 7 Cover音乐(音乐翻版，修改风格)',
                children: [
                  { id: 'suno-s7-step1', title: '步骤 1 音乐生成', path: '/music-generation/suno/official/scene7/step1', method: 'POST' },
                  { id: 'suno-s7-step2', title: '步骤 2 查询任务', path: '/music-generation/suno/official/scene7/step2', method: 'GET' },
                  { id: 'suno-s7-step3', title: '步骤 3 Cover 音乐', path: '/music-generation/suno/official/scene7/step3', method: 'POST' },
                  { id: 'suno-s7-step4', title: '步骤 4 查询拓展的任务', path: '/music-generation/suno/official/scene7/step4', method: 'GET' },
                ],
              },
            ],
          },
          {
            id: 'suno-newapi',
            title: '支持 newapi, rixapi 接入',
            children: [
              { id: 'suno-newapi-intro', title: 'suno api 说明', path: '/music-generation/suno/newapi/intro' },
              {
                id: 'suno-newapi-s1',
                title: '场景1 - 灵感模式',
                children: [
                  { id: 'suno-newapi-s1-generate', title: '场景1 - 灵感模式 生成音乐', path: '/music-generation/suno/newapi/scene1/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s2',
                title: '场景2 - 自定义模式',
                children: [
                  { id: 'suno-newapi-s2-generate', title: '场景2 - 自定义歌词、标题和风格', path: '/music-generation/suno/newapi/scene2/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s3',
                title: '场景3 - 纯音乐自定义',
                children: [
                  { id: 'suno-newapi-s3-generate', title: '场景3 - 生成纯音乐', path: '/music-generation/suno/newapi/scene3/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s4',
                title: '场景4 - 纯音乐灵感',
                children: [
                  { id: 'suno-newapi-s4-generate', title: '场景4 - 灵感模式 生成纯音乐', path: '/music-generation/suno/newapi/scene4/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s5',
                title: '场景5 - 续写音频',
                children: [
                  { id: 'suno-newapi-s5-generate', title: '场景5 - 续写/扩展 已有音频', path: '/music-generation/suno/newapi/scene5/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s6',
                title: '场景6 - 混音重置',
                children: [
                  { id: 'suno-newapi-s6-generate', title: '场景6 - 混音重制 (使用参考音频)', path: '/music-generation/suno/newapi/scene6/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s7',
                title: '场景7 - 替换片段',
                children: [
                  { id: 'suno-newapi-s7-generate', title: '场景7 - 替换歌曲指定片段', path: '/music-generation/suno/newapi/scene7/generate', method: 'POST' },
                ],
              },
              {
                id: 'suno-newapi-s8',
                title: '场景8 - 全轨分离',
                children: [
                  { id: 'suno-newapi-s8-generate', title: '场景8 - 全轨声曲分离', path: '/music-generation/suno/newapi/scene8/generate', method: 'POST' },
                ],
              },
              { id: 'suno-newapi-s9', title: '场景9 - 人声分离', path: '/music-generation/suno/newapi/scene9' },
            ],
          },
          {
            id: 'suno-custom-deprecated',
            title: '自定义格式(已废弃)',
            isDeprecated: true,
            children: [
              { id: 'suno-custom-create', title: '音乐生成(create)', path: '/music-generation/suno/custom/create', method: 'POST' },
              { id: 'suno-custom-feed', title: '查询任务(feed)', path: '/music-generation/suno/custom/feed', method: 'GET' },
            ],
          },
        ],
      },
      {
        id: 'udio',
        title: 'udio-(不支持)',
        children: [
          {
            id: 'udio-official',
            title: '官方接口格式',
            children: [
              { id: 'udio-generate', title: '生成音乐', path: '/music-generation/udio/official/generate', method: 'POST' },
              { id: 'udio-query', title: '查询任务', path: '/music-generation/udio/official/query', method: 'GET' },
              { id: 'udio-lyrics', title: '生成歌词', path: '/music-generation/udio/official/lyrics', method: 'POST' },
            ],
          },
          {
            id: 'udio-openai',
            title: '兼容 openai chat格式',
            children: [
              { id: 'udio-openai-generate', title: '生成音乐', path: '/music-generation/udio/openai/generate', method: 'POST' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'file-service',
    title: '文件服务',
    children: [
      { id: 'file-upload', title: '文件上传-待开发', path: '/file-service/upload', method: 'POST', isNew: true },
    ],
  },
  {
    id: 'url-analysis',
    title: '链接分析（url analysis)',
    children: [
      { id: 'url-summary', title: '链接总结-待开发（summary）', path: '/url-analysis/summary', method: 'POST', isNew: true },
      { id: 'url-chat', title: '链接聊天-待开发（chat）', path: '/url-analysis/chat', method: 'POST', isNew: true },
      { id: 'url-subtitle', title: '字幕导出-待开发（subtitle）', path: '/url-analysis/subtitle', method: 'POST', isNew: true },
    ],
  },
  {
    id: 'gpts',
    title: 'GPTs相关',
    children: [
      { id: 'gpts-intro', title: 'GPTs 相关接口文档', path: '/gpts/intro' },
      { id: 'gpts-chat', title: 'GPTs 对话', path: '/gpts/chat', method: 'POST' },
      { id: 'gpts-search-chat', title: '搜索相关 GPTs (chat 格式)', path: '/gpts/search-chat', method: 'POST', isNew: true },
      { id: 'gpts-search-official', title: '搜索相关 GPTs (官方格式)', path: '/gpts/search-official', method: 'GET', isNew: true },
      { id: 'gpts-detail-chat', title: '查询 GPTs 详情 (chat 格式)', path: '/gpts/detail-chat', method: 'POST', isNew: true },
      { id: 'gpts-detail-official', title: '查询 GPTs 详情 (官方格式)', path: '/gpts/detail-official', method: 'GET', isNew: true },
      { id: 'gpts-batch-chat', title: '批量查询 GPTs 详情 (chat 格式)', path: '/gpts/batch-chat', method: 'POST', isNew: true },
      { id: 'gpts-batch-official', title: '批量查询 GPTs 详情 (官方格式)', path: '/gpts/batch-official', method: 'GET', isNew: true },
    ],
  },
  {
    id: 'digital-human',
    title: '数字人',
    children: [
      {
        id: 'digital-human-official',
        title: '官方 API',
        children: [
          { id: 'dh-voice-list', title: '查询 默认voice 列表', path: '/digital-human/official/voice-list', method: 'GET' },
          { id: 'dh-generate', title: '生成数字人视频', path: '/digital-human/official/generate', method: 'POST' },
          { id: 'dh-task-detail', title: '获取任务详情', path: '/digital-human/official/task-detail', method: 'GET' },
        ],
      },
      {
        id: 'digital-human-openai',
        title: '兼容 openai chat 格式',
        children: [
          { id: 'dh-openai-generate', title: '生成数字人', path: '/digital-human/openai/generate', method: 'POST', isNew: true },
        ],
      },
    ],
  },
  {
    id: 'glm',
    title: '智谱清言（glm)',
    children: [
      { id: 'glm-intro', title: '智谱清言相关 api 接口文档', path: '/glm/intro' },
      {
        id: 'glm-video',
        title: '视频生成',
        children: [
          { id: 'glm-video-chat', title: '生成视频(chat 格式)', path: '/glm/video/chat', method: 'POST', isNew: true },
          { id: 'glm-video-generate', title: '生成视频(generations)', path: '/glm/video/generate', method: 'POST' },
          { id: 'glm-video-query', title: '查询任务(async-result)', path: '/glm/video/query', method: 'GET' },
        ],
      },
    ],
  },
  {
    id: 'async-transform',
    title: '异步sora-2、veo3、gemini、deepsearch等',
    children: [
      { id: 'async-intro', title: '转换接口说明', path: '/async-transform/intro' },
      {
        id: 'async-stream',
        title: '流式转换',
        children: [
          { id: 'async-stream-convert', title: '流式转换接口', path: '/async-transform/stream/convert', method: 'POST' },
          { id: 'async-stream-query', title: '查询任务详情', path: '/async-transform/stream/query', method: 'GET' },
        ],
      },
      {
        id: 'async-gemini-deepsearch',
        title: '异步 gemini-2.5-pro-deepsearch',
        children: [
          { id: 'async-gemini-get-task', title: '获取任务链接', path: '/async-transform/gemini-deepsearch/get-task', method: 'POST' },
          { id: 'async-gemini-query', title: '查询任务详情', path: '/async-transform/gemini-deepsearch/query', method: 'GET' },
        ],
      },
      {
        id: 'async-veo3',
        title: '异步 veo3',
        children: [
          { id: 'async-veo3-get-task', title: '获取任务链接', path: '/async-transform/veo3/get-task', method: 'POST' },
          { id: 'async-veo3-query', title: '查询任务详情', path: '/async-transform/veo3/query', method: 'GET' },
        ],
      },
      {
        id: 'async-sora-2',
        title: '异步 sora-2',
        children: [
          { id: 'async-sora2-with-image', title: '获取任务链接 (传图)', path: '/async-transform/sora-2/with-image', method: 'POST' },
          { id: 'async-sora2-get-task', title: '获取任务链接', path: '/async-transform/sora-2/get-task', method: 'POST' },
          { id: 'async-sora2-query', title: '查询任务详情', path: '/async-transform/sora-2/query', method: 'GET' },
        ],
      },
    ],
  },
  {
    id: 'async-general',
    title: '异步任务通用接口（内测）',
    children: [
      { id: 'async-general-query', title: '查询任务', path: '/async-general/query', method: 'GET', isNew: true },
    ],
  },
  {
    id: 'data-models',
    title: '数据模型',
    children: [
      {
        id: 'example-models',
        title: '示例数据模型',
        children: [
          { id: 'model-pet', title: 'Pet', path: '/data-models/example/pet' },
          { id: 'model-category', title: 'Category', path: '/data-models/example/category' },
          { id: 'model-tag', title: 'Tag', path: '/data-models/example/tag' },
        ],
      },
      {
        id: 'veo-models',
        title: 'veo',
        children: [
          { id: 'veo-model', title: 'veo 模型', path: '/data-models/veo/model' },
          { id: 'veo-status', title: 'veo status', path: '/data-models/veo/status' },
        ],
      },
      {
        id: 'schemas',
        title: 'Schemas',
        children: [
          { id: 'schema-chat-request', title: 'ChatCompletionRequest', path: '/data-models/schemas/chat-request' },
          { id: 'schema-transform-response', title: 'TransformSuccessResponse', path: '/data-models/schemas/transform-response' },
          { id: 'schema-error-response', title: 'ErrorResponse', path: '/data-models/schemas/error-response' },
          { id: 'schema-message', title: 'Message', path: '/data-models/schemas/message' },
        ],
      },
      {
        id: 'sora-models',
        title: 'sora',
        children: [
          {
            id: 'sora-scene-7-models',
            title: '场景7',
            children: [
              { id: 'sora-s7a', title: '场景7A - 替换上传音频的片段(带版本)', path: '/data-models/sora/scene7/a' },
              { id: 'sora-s7b', title: '场景7B - 替换系统生成音频的片段 (不带版本)', path: '/data-models/sora/scene7/b' },
            ],
          },
        ],
      },
    ],
  },
];
