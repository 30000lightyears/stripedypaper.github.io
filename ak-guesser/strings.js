angular.module('app')
.constant('strings', {
    'en_US': {
        loadingResources: 'Loading resources...',
        arknightsGuesserTitle: 'Arknights Guesser (beta)',
        darkMode: 'Dark mode',
        showMore: 'Show more',
        previousImage: 'Previous image',
        scoreIncreaseIfGuessed: 'Score increase if guessed',
        currentScore: 'Current score',
        timeRemaining: 'Time remaining',
        enableOperatorE0Art: 'Enable operator E0 art',
        enableOperatorE2Art: 'Enable operator E2 art',
        enableOperatorSkinArt: 'Enable operator skin art',
        endlessMode: 'Endless mode',
        avoidBadZoomOption: 'Try to avoid zooming in on blank area (experimental)',
        newGame: 'New game',
        skip: 'Skip',
        skipped: 'Skipped',
        e0: 'E0',
        e1: 'E1',
        e2: 'E2',
        // below 3 strings are used like this: `#x guess + #x zoom out = # points`
        guesses: 'guess',
        zoomOuts: 'zoom out',
        points: 'points',
        timesUp: 'Time\'s up!',
    },
    'zh_CN': {
        loadingResources: '正在加载资源...',
        arknightsGuesserTitle: '明日方舟干员猜图 (测试版)',
        darkMode: '暗黑模式',
        showMore: '显示更多',
        previousImage: '上一张图片',
        scoreIncreaseIfGuessed: '猜中时得分增加',
        currentScore: '当前得分',
        timeRemaining: '剩余时间',
        enableOperatorE0Art: '启用干员未精英化立绘',
        enableOperatorE2Art: '启用干员精英化二立绘',
        enableOperatorSkinArt: '启用干员皮肤立绘',
        endlessMode: '无尽模式',
        avoidBadZoomOption: '尝试避免放大空白区域（实验性）',
        newGame: '新游戏',
        skip: '跳过',
        skipped: '已跳过',
        e0: 'E0',
        e1: 'E1',
        e2: 'E2',
        // below 3 strings are used like this: `#x guess + #x zoom out = # points`
        guesses: '次猜测',
        zoomOuts: '次缩小',
        points: '分数',
        timesUp: '时间到！',
    }
})
