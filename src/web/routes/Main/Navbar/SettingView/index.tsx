import React, { useMemo } from 'react';
import { TMemo } from '@shared/components/TMemo';
import { SidebarViewMenuType, SidebarView } from '@web/components/SidebarView';
import { useTRPGDispatch } from '@shared/hooks/useTRPGSelector';
import { logout } from '@redux/actions/user';
import config from '@shared/project.config';
import { SystemStatusInfo } from '@web/components/modals/SystemStatus';
import { UserSettings } from '@web/components/modals/UserSettings';
import { SettingAccountView } from './SettingAccountView';
import { AccountLoginLog } from './AccountLoginLog';
import { SettingSystemConfig } from './SettingSystemConfig';
import { ErrorReportView } from '@web/components/ErrorReportView';
import { DevelopLab } from './DevelopLab';
import { AboutView } from './AboutView';
import { useTranslation } from '@shared/i18n';
import { showAlert } from '@shared/manager/ui';

export const SettingView: React.FC = TMemo(() => {
  const dispatch = useTRPGDispatch();
  const { t } = useTranslation();
  const menu: SidebarViewMenuType[] = useMemo(
    () => [
      {
        type: 'group',
        title: t('设置'),
        children: [
          {
            type: 'item',
            title: t('我的账号'),
            content: <SettingAccountView />,
          },
          {
            type: 'item',
            title: t('登录记录'),
            content: <AccountLoginLog />,
          },
          {
            type: 'item',
            title: t('个人设置'),
            hidden: true, // 暂时没有设置
            content: <UserSettings />, // 注意。这里没有办法保存设置. 里面内置的保存是取消挂载时生效。并不好用，需要修改
          },
          {
            type: 'item',
            title: t('系统设置'),
            content: <SettingSystemConfig />, // 注意。这里没有办法保存设置. 里面内置的保存是取消挂载时生效。并不好用，需要修改
          },
        ],
      },
      {
        type: 'group',
        title: t('更多'),
        children: [
          {
            type: 'item',
            title: t('系统状态'),
            content: <SystemStatusInfo style={{ color: 'white' }} />,
          },
          {
            type: 'item',
            title: t('汇报错误'), // TODO: 这个功能不应当依赖于sentry报错
            isDev: true,
            content: <ErrorReportView />,
          },
          {
            type: 'item',
            isDev: true,
            title: t('开发实验室'),
            content: <DevelopLab />,
          },
          {
            type: 'item',
            title: t('关于'),
            content: <AboutView />,
          },
        ],
      },
      {
        type: 'group',
        title: '',
        children: [
          {
            type: 'link',
            title: t('清理缓存'),
            onClick: () => {
              showAlert({
                message: t('确认要清除缓存么'),
                onConfirm() {
                  window.localStorage.clear();
                  window.sessionStorage.clear();
                  window.location.href = '/';
                },
              });
            },
          },
          {
            type: 'link',
            title: t('官方网站'),
            onClick: () => window.open(config.url.homepage),
          },
          {
            type: 'link',
            title: t('开发博客'),
            onClick: () => window.open(config.url.blog),
          },
          {
            type: 'link',
            title: t('退出登录'),
            onClick: () => dispatch(logout()),
            isDanger: true,
          },
        ],
      },
    ],
    [t]
  );

  return <SidebarView defaultContentPath="0.children.0.content" menu={menu} />;
});
SettingView.displayName = 'SettingView';
