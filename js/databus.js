import Pool from './base/pool'

let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.pool = new Pool()

    this.reset()
  }

  reset() {
    this.frame      = 0
    this.score      = 0
    this.bullets    = []
    this.enemys     = []
    this.animations = []
    this.gameOver   = false

    this.questionIndex = 0
    this.answers = []
    this.GenerateOptions()
  }

  /**
   * 回收敌人，进入对象池
   * 此后不进入帧循环
   */
  removeEnemey(enemy) {
    let temp = this.enemys.shift()

    temp.visible = false

    this.pool.recover('enemy', enemy)
  }

  /**
   * 回收子弹，进入对象池
   * 此后不进入帧循环
   */
  removeBullets(bullet) {
    let temp = this.bullets.shift()

    temp.visible = false

    this.pool.recover('bullet', bullet)
  }

  CheckResultExist(rst) {
    for (let i = 0, il = this.answers.length; i < il; i++) {
      let answer = this.answers[i]

      if(answer == rst) {
        return true
      }
    }
    this.answers.push(rst)
    this.GenerateOptions()
    return false
  }

  GenerateOptions() {
    this.optionA = Math.random() * 100
    this.optionB = Math.random() * 100
    this.optionC = Math.random() * 100
    this.optionD = Math.random() * 100
    console.log("Generate")
  }
}
