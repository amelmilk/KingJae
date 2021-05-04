configData = {
  numChatMax        : 10,
  personalColor     : true,
  badgeVisible      : true,
  badgeChannelId    : 0,
  themeURI          : "",
  theme             : "default",
  themeName         : "",
  msgExistDuration  : 10,
  msgAniDuration    : 10,
  debugLevel        : 2,
  useDisplayName    : true,
  loadCheerImgs     : true,
  loadTwitchCons    : true,
  loadDcCons        : true,
  dcConsURI         : "",
  subMonthsMsg      : "�� {!0:{months} ���� }����{0: ����}! ��",
  cheersMsg         : "�� {!0:{bits} ��Ʈ }�Ŀ� ! ��",
  clipReplaceMsg    : "[ Ŭ�� ]",
  linkReplaceMsg    : "[ ��ũ ]",
  webSocket         : "wss://irc-ws.chat.twitch.tv:443",
  nick              : "justinfan16831",
  pass              : "foobar",
  channel           : "#shaft618",
  retryInterval     : 2,
  allMessageHandle  : false,
  muteUser          : ["Nightbot"],
  deleteBanMsg      : true,
  commands          : [
    {exe:"clear", msg:"!!clear"},
    {exe:"theme", msg:"!!theme"},
    {exe:"load", msg:"!!load"},
    {exe:"scale", msg:"!!scale"}
  ],
  replaceMsgs       : [
    {orig:/^!{1,2}[a-zA-Z]+/, to:"{no_display}"}     // �� ȣ�� ���� �޼��� ��ǥ��
  ]
};
