import { createContext, useContext, useState, ReactNode } from 'react';

// 定义支持的语言类型
type Language = 'zh' | 'en';

// 定义语言上下文类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations = {
  zh: {
    '首页': '首页',
    '文物': '文物',
    '对话': '对话',
    '游戏': '游戏',
    '跨越千年的对话': '跨越千年的对话',
    'AI 生成内容仅供参考，请以官方历史记载为准': 'AI 生成内容仅供参考，请以官方历史记载为准',
    '向{{name}}提问...': '向{{name}}提问...',
    '灵识觉醒中': '灵识觉醒中',
    '3D模型展示': '3D模型展示',
    '加载中...': '加载中...',
    '3D模型加载失败': '3D模型加载失败',
    '显示默认模型': '显示默认模型',
    '猜文物': '猜文物',
    '拼图游戏': '拼图游戏',
    '开始游戏': '开始游戏',
    '重新开始': '重新开始',
    '提示': '提示',
    '恭喜你猜对了！': '恭喜你猜对了！',
    '再接再厉！': '再接再厉！',
    '查看文物详情': '查看文物详情',
    '文物详情': '文物详情',
    '返回': '返回',
    '历史背景': '历史背景',
    '文物特点': '文物特点',
    '保存状态': '保存状态',
    '苏州博物馆': '苏州博物馆',
    '贝聿铭的建筑杰作 · 吴文化的殿堂': '贝聿铭的建筑杰作 · 吴文化的殿堂',
    '关于博物馆': '关于博物馆',
    '苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。': '苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。',
    '博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。': '博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。',
    '贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。': '贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。',
    '参观信息': '参观信息',
    '开放时间': '开放时间',
    '周二至周日 9:00-17:00（16:00停止入馆）': '周二至周日 9:00-17:00（16:00停止入馆）',
    '周一闭馆（国家法定节假日除外）': '周一闭馆（国家法定节假日除外）',
    '地址': '地址',
    '江苏省苏州市姑苏区东北街204号': '江苏省苏州市姑苏区东北街204号',
    '（紧邻拙政园、狮子林）': '（紧邻拙政园、狮子林）',
    '咨询电话': '咨询电话',
    '0512-67575666': '0512-67575666',
    '快速入口': '快速入口',
    '精品文物': '精品文物',
    '3D观赏珍藏': '3D观赏珍藏',
    'AI对话': 'AI对话',
    '与文物互动': '与文物互动',
    '互动游戏': '互动游戏',
    '趣味学习吴文化': '趣味学习吴文化',
    '共收录 {count} 件珍贵文物': '共收录 {count} 件珍贵文物',
    '在游戏中学习吴文化知识': '在游戏中学习吴文化知识',
    '文物拼图': '文物拼图',
    '将打乱的文物图片拼回完整': '将打乱的文物图片拼回完整',
    '猜猜文物': '猜猜文物',
    '根据线索猜测文物名称': '根据线索猜测文物名称',
    '💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！': '💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！',
    '文物不存在': '文物不存在',
    '返回文物列表': '返回文物列表',
    '与TA对话': '与TA对话',
    '📷 图片': '📷 图片',
    '3D': '3D',
    '朝代': '朝代',
    '年代': '年代',
    '文物介绍': '文物介绍',
    '文物自述': '文物自述',
    '得分: ': '得分: ',
    ' / ': ' / ',
    '这是什么文物？': '这是什么文物？',
    '🔍 显示线索 (3次)': '🔍 显示线索 (3次)',
    '🔍 再清晰一点 (2次)': '🔍 再清晰一点 (2次)',
    '🔍 最后一次提示 (1次)': '🔍 最后一次提示 (1次)',
    '✓ 已显示完整图片': '✓ 已显示完整图片',
    '💡 朝代：': '💡 朝代：',
    '💡 年代：': '💡 年代：',
    '💡 提示：': '💡 提示：',
    '🎉 回答正确！': '🎉 回答正确！',
    '❌ 正确答案是：': '❌ 正确答案是：',
    '游戏结束！': '游戏结束！',
    '完美！你是文物专家！': '完美！你是文物专家！',
    '不错！继续加油！': '不错！继续加油！',
    '多看看文物介绍吧~': '多看看文物介绍吧~',
    '再玩一次': '再玩一次',
    '文物修复计划': '文物修复计划',
    'Puzzle Challenge': 'Puzzle Challenge',
    '正在修复': '正在修复',
    '移动步数': '移动步数',
    '隐藏原图': '隐藏原图',
    '查看原图': '查看原图',
    '修复成功！': '修复成功！',
    '你只用了 {moves} 步就让 {artifactName} 焕发新生。': '你只用了 {moves} 步就让 {artifactName} 焕发新生。',
    '挑战下一关': '挑战下一关',
    '回到大厅': '回到大厅',
    '欢迎语前缀': '(整理了一下衣角) 游客你好，我是',
    '欢迎语中缀1': '。在这博物馆的橱窗里待久了，甚是寂寞。你是想听听',
    '欢迎语中缀2': '的故事，还是想了解我的来历？',
    '真珠舍利宝幢': '真珠舍利宝幢',
    '北宋': '北宋',
    '公元960-1127年': '公元960-1127年',
    '苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。': '苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。',
    '我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。': '我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。',
    '五代秘色瓷莲花碗': '五代秘色瓷莲花碗',
    '五代': '五代',
    '公元907-960年': '公元907-960年',
    '秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。': '秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。',
    '我来自越窑，那个出产\'秘色瓷\'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。': '我来自越窑，那个出产\'秘色瓷\'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。',
    '明代虎丘塔出土玉器': '明代虎丘塔出土玉器',
    '明代': '明代',
    '公元1368-1644年': '公元1368-1644年',
    '从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。': '从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。',
    '我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着\'良玉虽集京师，工巧则推苏郡\'的美誉。': '我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着\'良玉虽集京师，工巧则推苏郡\'的美誉。',
    '文徵明《拙政园图》': '文徵明《拙政园图》',
    '公元1533年': '公元1533年',
    '明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。': '明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。',
    '我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着\'虽由人作，宛自天开\'的造园哲学。': '我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着\'虽由人作，宛自天开\'的造园哲学。',
    '清代苏绣《仕女图》': '清代苏绣《仕女图》',
    '清代': '清代',
    '公元1644-1911年': '公元1644-1911年',
    '苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣\'平、齐、细、密、匀、顺、和、光\'的八字诀。': '苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣\'平、齐、细、密、匀、顺、和、光\'的八字诀。',
    '我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着\'苏州刺绣甲天下\'的美誉。': '我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着\'苏州刺绣甲天下\'的美誉。',
  },
  en: {
    '首页': 'Home',
    '文物': 'Artifacts',
    '对话': 'Chat',
    '游戏': 'Games',
    '跨越千年的对话': 'Cross-millennium Dialogue',
    'AI 生成内容仅供参考，请以官方历史记载为准': 'AI-generated content is for reference only, please refer to official historical records',
    '向{{name}}提问...': 'Ask {{name}}...',
    '灵识觉醒中': 'Spirit Awakening',
    '3D模型展示': '3D Model Display',
    '加载中...': 'Loading...',
    '3D模型加载失败': '3D model loading failed',
    '显示默认模型': 'Show default model',
    '猜文物': 'Guess Artifact',
    '拼图游戏': 'Puzzle Game',
    '开始游戏': 'Start Game',
    '重新开始': 'Restart',
    '提示': 'Hint',
    '恭喜你猜对了！': 'Congratulations, you guessed it right!',
    '再接再厉！': 'Keep it up!',
    '查看文物详情': 'View Artifact Details',
    '文物详情': 'Artifact Details',
    '返回': 'Back',
    '历史背景': 'Historical Background',
    '文物特点': 'Artifact Features',
    '保存状态': 'Save State',
    '苏州博物馆': 'Suzhou Museum',
    '贝聿铭的建筑杰作 · 吴文化的殿堂': 'I.M. Pei\'s Architectural Masterpiece · Palace of Wu Culture',
    '关于博物馆': 'About the Museum',
    '苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。': 'Suzhou Museum was founded in 1960 and is located on Dongbei Street in the ancient city of Suzhou. In October 2006, the new Suzhou Museum designed by world-renowned architect I.M. Pei was completed and opened. The new museum building integrates tradition and modernity, complementing the surrounding classical gardens such as the Humble Administrator\'s Garden and Lion Grove, becoming an architectural model of "Chinese yet new, Suzhou yet new".',
    '博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。': 'The museum\'s main exhibitions are divided into four series: Wu region history, Wu tower national treasures, Wu style elegance, and Wu school calligraphy and painting. It houses over 40,000 cultural relics, including nearly 100 national first-class cultural relics, showcasing Suzhou\'s long and splendid historical culture.',
    '贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。': 'Mr. I.M. Pei once said: "The design of Suzhou Museum is my last work in China and my favorite work in my heart." This museum, which perfectly combines the spatial artistic conception of Suzhou classical gardens with modern architecture, has become a new cultural landmark of Suzhou.',
    '参观信息': 'Visitor Information',
    '开放时间': 'Opening Hours',
    '周二至周日 9:00-17:00（16:00停止入馆）': 'Tuesday to Sunday 9:00-17:00 (last entry at 16:00)',
    '周一闭馆（国家法定节假日除外）': 'Closed on Mondays (except national statutory holidays)',
    '地址': 'Address',
    '江苏省苏州市姑苏区东北街204号': '204 Dongbei Street, Gusu District, Suzhou, Jiangsu Province',
    '（紧邻拙政园、狮子林）': '(Adjacent to Humble Administrator\'s Garden and Lion Grove)',
    '咨询电话': 'Inquiry Phone',
    '0512-67575666': '0512-67575666',
    '快速入口': 'Quick Access',
    '精品文物': 'Exquisite Artifacts',
    '3D观赏珍藏': '3D Viewing of Treasures',
    'AI对话': 'AI Chat',
    '与文物互动': 'Interact with Artifacts',
    '互动游戏': 'Interactive Games',
    '趣味学习吴文化': 'Fun Learning of Wu Culture',
    '共收录 {count} 件珍贵文物': 'A total of {count} precious artifacts',
    '在游戏中学习吴文化知识': 'Learn Wu culture knowledge through games',
    '文物拼图': 'Artifact Puzzle',
    '将打乱的文物图片拼回完整': 'Put the scrambled artifact images back together',
    '猜猜文物': 'Guess the Artifact',
    '根据线索猜测文物名称': 'Guess the artifact name based on clues',
    '💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！': '💡 Tip: Games can help you better remember the characteristics and historical background of artifacts!',
    '文物不存在': 'Artifact does not exist',
    '返回文物列表': 'Return to artifacts list',
    '与TA对话': 'Chat with TA',
    '📷 图片': '📷 Image',
    '3D': '3D',
    '朝代': 'Dynasty',
    '年代': 'Year',
    '文物介绍': 'Artifact Introduction',
    '文物自述': 'Artifact Story',
    '得分: ': 'Score: ',
    ' / ': ' / ',
    '这是什么文物？': 'What artifact is this?',
    '🔍 显示线索 (3次)': '🔍 Show clue (3 times)',
    '🔍 再清晰一点 (2次)': '🔍 A bit clearer (2 times)',
    '🔍 最后一次提示 (1次)': '🔍 Final hint (1 time)',
    '✓ 已显示完整图片': '✓ Full image displayed',
    '💡 朝代：': '💡 Dynasty: ',
    '💡 年代：': '💡 Year: ',
    '💡 提示：': '💡 Hint: ',
    '🎉 回答正确！': '🎉 Correct answer!',
    '❌ 正确答案是：': '❌ Correct answer is: ',
    '游戏结束！': 'Game over!',
    '完美！你是文物专家！': 'Perfect! You are an artifact expert!',
    '不错！继续加油！': 'Good! Keep it up!',
    '多看看文物介绍吧~': 'Check out the artifact introductions more~',
    '再玩一次': 'Play again',
    '文物修复计划': 'Artifact Restoration Plan',
    '正在修复': 'Restoring',
    '移动步数': 'Moves',
    '隐藏原图': 'Hide original',
    '查看原图': 'View original',
    '修复成功！': 'Restoration successful!',
    '你只用了 {moves} 步就让 {artifactName} 焕发新生。': 'You restored {artifactName} in just {moves} moves.',
    '挑战下一关': 'Next challenge',
    '回到大厅': 'Back to lobby',
    '欢迎语前缀': '(adjusts clothes) Hello visitor, I am',
    '欢迎语中缀1': '. I have been in this museum showcase for a long time and feel quite lonely. Would you like to hear stories about the',
    '欢迎语中缀2': 'or learn about my origin?',
    '真珠舍利宝幢': 'Pearl Sarira Pagoda',
    '北宋': 'Northern Song Dynasty',
    '公元960-1127年': '960-1127 AD',
    '苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。': 'The treasure of Suzhou Museum, it is a Buddhist relic from the Northern Song Dynasty. The pagoda is 122.6 cm tall, made of wood, gold, silver, pearls, gemstones and other materials, with exquisite craftsmanship, and is a treasure among Chinese Buddhist cultural relics.',
    '我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。': 'I was born in the second year of Taiping Xingguo in the Northern Song Dynasty, built by King Qian Chu of Wuyue to pray for national peace and prosperity. After thousands of years of wind and frost, I have witnessed the rise and fall of Suzhou, carrying devout faith and exquisite craftsmanship. Every pearl and every gold leaf embodies the wisdom and piety of the ancients.',
    '五代秘色瓷莲花碗': 'Five Dynasties Secret Color Porcelain Lotus Bowl',
    '五代': 'Five Dynasties',
    '公元907-960年': '907-960 AD',
    '秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。': 'Secret color porcelain is the finest of Yue kiln celadon,专供 the royal family. This lotus bowl has a青翠 glaze color and beautiful shape, representing the highest level of porcelain-making technology in the Five Dynasties period.',
    '我来自越窑，那个出产\'秘色瓷\'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。': 'I come from Yue Kiln, the mysterious place that produces \'secret color porcelain\'. My glaze color is like the green of a thousand peaks, like the blue waves of a lake. In the chaotic times of the Five Dynasties and Ten Kingdoms, I was once a treasure of the royal nobility. Now I lie quietly in Suzhou Museum, continuing to tell the story of the prosperity a thousand years ago.',
    '明代虎丘塔出土玉器': 'Jade Articles Unearthed from Tiger Hill Pagoda in Ming Dynasty',
    '明代': 'Ming Dynasty',
    '公元1368-1644年': '1368-1644 AD',
    '从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。': 'Jade articles unearthed from the famous Tiger Hill Pagoda in Suzhou, with fine carving and温润 jade quality. Including jade bi, jade pendants and other artifacts, reflecting the high level of jade carving craftsmanship in Suzhou during the Ming Dynasty.',
    '我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着\'良玉虽集京师，工巧则推苏郡\'的美誉。': 'I was once hidden under Tiger Hill Pagoda, guarding this ancient pagoda together with Buddhist scriptures and relics. I witnessed the prosperity of Suzhou during the Ming Dynasty, when Suzhou was the largest city in the Jiangnan region, with merchants gathering and scholars assembling. Every carving of mine embodies the painstaking efforts of craftsmen, demonstrating the reputation that \'although fine jade gathers in the capital, craftsmanship is best in Suzhou\'.',
    '文徵明《拙政园图》': 'Wen Zhengming\'s "Humble Administrator\'s Garden\'\'',
    '公元1533年': '1533 AD',
    '明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。': 'A panoramic view of the Humble Administrator\'s Garden painted by the famous Ming Dynasty painter Wen Zhengming, which detailedly depicts the scenery of this famous Suzhou garden. This painting is not only an artistic treasure, but also an important historical material for studying Suzhou gardens.',
    '我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着\'虽由人作，宛自天开\'的造园哲学。': 'I was created by Wen Zhengming, a master of the Wu School of painting, depicting the private garden of his friend Wang Xianchen - the Humble Administrator\'s Garden. I used delicate brushwork to record the peerless elegance of Suzhou gardens in that era. Every stroke is imbued with the poetry of Jiangnan, and every scene embodies the gardening philosophy of \'although made by man, it seems like nature\'.',
    '清代苏绣《仕女图》': 'Qing Dynasty Su Embroidery "Lady Portrait"',
    '清代': 'Qing Dynasty',
    '公元1644-1911年': '1644-1911 AD',
    '苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣\'平、齐、细、密、匀、顺、和、光\'的八字诀。': 'Suzhou embroidery is one of the four famous embroidery styles in China, known for its fine stitching and beautiful patterns. This lady portrait embroidery has elegant colors and lifelike figures, demonstrating the eight-character formula of Su embroidery: \'flat, neat, fine, dense, even, smooth, harmonious, and bright\'.',
    '我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着\'苏州刺绣甲天下\'的美誉。': 'I was embroidered by Suzhou needlewomen using the finest silk threads and the most exquisite techniques. Every stitch was carefully designed, and every thread was just right. I witnessed the journey of Su embroidery from the court to the people, from practical use to art. My existence proves the reputation that \'Suzhou embroidery is the best in the world\'.',
  }
};

// 语言提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('zh');

  // 翻译函数
  const t = (key: string, variables?: Record<string, string | number>) => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key;
    
    // 替换变量
    if (variables) {
      Object.entries(variables).forEach(([key, value]) => {
        // 同时支持单大括号和双大括号的变量格式
        translation = translation.replace(`{${key}}`, String(value));
        translation = translation.replace(`{{${key}}}`, String(value));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 自定义钩子，用于在组件中使用语言上下文
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
