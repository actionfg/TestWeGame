const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let atlas = new Image()
atlas.src = 'images/Common.png'

export default class GameInfo {
  renderGameScore(ctx, score) {
    ctx.fillStyle = "#ffffff"
    ctx.font      = "20px Arial"

    ctx.fillText(
      score,
      10,
      30
    )
  }

  renderQuestion(ctx, score, option1, option2, option3, option4) {    
    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"

    ctx.fillText(score, 10, 30)
    ctx.fillText("请选择一个未选择过的数字", screenWidth / 2 - 80, screenHeight / 2 - 100 + 50)

    ctx.fillText("A: " + option1, screenWidth / 2 - 80, screenHeight / 2)
    this.btnAArea = {
      startX: screenWidth / 2 - 80,
      startY: screenHeight / 2,
      endX: screenWidth / 2 - 50,
      endY: screenHeight / 2 + 50
    }

    ctx.fillText("B: " + option2, screenWidth / 2 - 40, screenHeight / 2)
    this.btnBArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2,
      endX: screenWidth / 2 - 10,
      endY: screenHeight / 2 + 50
    }

    ctx.fillText("C: " + option3, screenWidth / 2 , screenHeight / 2)
    this.btnCArea = {
      startX: screenWidth / 2,
      startY: screenHeight / 2,
      endX: screenWidth / 2 + 30,
      endY: screenHeight / 2 + 50
    }

    ctx.fillText("D: " + option1, screenWidth / 2 + 40, screenHeight / 2)
    this.btnDArea = {
      startX: screenWidth / 2 + 40,
      startY: screenHeight / 2,
      endX: screenWidth / 2 + 70,
      endY: screenHeight / 2 + 50
    }
  }

  renderGameOver(ctx, score) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)

    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"

    ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 50
    )

    ctx.fillText(
      '得分: ' + score,
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 130
    )

    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180,
      120, 40
    )

    ctx.fillText(
      '重新开始',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 205
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 180,
      endX  : screenWidth / 2  + 50,
      endY  : screenHeight / 2 - 100 + 255
    }
  }
}

