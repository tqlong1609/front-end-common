type ArgsValue = 'redux';

/**
 * repoUrl: GitHub repository URL
 * localDir: Local directory where you want to save the downloaded folder
 */
type Configs = {
  repoUrl: string;
  localDir: string;
};

export const configs: Record<ArgsValue, Configs> = {
  redux: {
    repoUrl: '/src/redux',
    localDir: './redux',
  },
};
