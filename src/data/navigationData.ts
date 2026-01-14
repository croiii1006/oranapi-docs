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
    id: 'anthropic',
    title: 'Anthropic',
    children: [
      {
        id: 'anthropic-chat',
        title: '聊天',
        children: [
          { id: 'claude-messages', title: 'Claude (Messages API)', path: '/anthropic/chat/messages', method: 'POST', isNew: true },
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
    ],
  },
  {
    id: 'video-generation',
    title: '视频生成',
    children: [
      {
        id: 'kling',
        title: 'kling（可灵）',
        children: [
          {
            id: 'kling-official',
            title: '官方格式',
            children: [
              { id: 'kling-text-to-video', title: '文生视频', path: '/video-generation/kling/official/text-to-video', method: 'POST' },
              { id: 'kling-image-to-video', title: '图生视频', path: '/video-generation/kling/official/image-to-video', method: 'POST' },
              { id: 'kling-video-effects', title: '视频特效', path: '/video-generation/kling/official/video-effects', method: 'POST' },
              { id: 'kling-query-task', title: '查询任务', path: '/video-generation/kling/official/query-task', method: 'GET' },
              { id: 'kling-query-effects', title: '查询任务（特效）', path: '/video-generation/kling/official/query-effects', method: 'GET' },
            ],
          },
          {
            id: 'kling-openai-videos',
            title: 'openai-videos格式',
            children: [
              { id: 'kling-openai-generate', title: '生成视频', path: '/video-generation/kling/openai/generate', method: 'POST' },
              { id: 'kling-openai-query', title: '查询视频', path: '/video-generation/kling/openai/query', method: 'GET' },
            ],
          },
        ],
      },
    ],
  },
];
