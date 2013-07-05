var Model = function(){};

Model.prototype.init = function (contents) {

  this.contents = contents;

  //
  // IMAGES
  //

  this.ITEM_IMAGE_PATH = "./images/bag/";
  this.ITEM_MAX = 100;

  this.ITEM_DATA = [
    [ "bag001-256.jpg", "バルーン型トートバッグ【ネット限定カラーあり】", 3045 ],
    [ "bag002-256.jpg", "一枚合皮のリバーシブルトートバッグ", 3675 ],
    [ "bag003-256.jpg", "軽量２ウェイショルダーバッグ", 3990 ],
    [ "bag004-256.jpg", "ナイロンコンビ３ウェイバッグ", 5990 ],
    [ "bag005-256.jpg", "ラフィアビッグトートバッグ(アンチフォルムデザイン)", 12075 ],
    [ "bag006-256.jpg", "【好評につき、新色追加】シンプルで使いやすい♪ベーシックミニトートバッグ", 1990 ],
    [ "bag007-256.jpg", "ナイロン×レザーツーウェイバッグ(Fascina／ファシーナ)", 9975 ],
    [ "bag008-256.jpg", "本革メッシュバッグ(zucchero filato)", 13650 ],
    [ "bag009-256.jpg", "折りたたみトートバッグ", 1995 ],
    [ "bag010-256.jpg", "仕分けができる９ポケットマザーズバッグ", 5229 ],
    [ "bag011-256.jpg", "２ウェイボストンバッグ(SAC)", 5145 ],
    [ "bag012-256.jpg", "メッシュショルダーバッグ", 2990 ],
    [ "bag013-256.jpg", "１０ポケット２ウェイバッグ(ディズニー)", 4990 ],
    [ "bag014-256.jpg", "多機能マルチショルダーバッグ(ディズニー)", 4990 ],
    [ "bag015-256.jpg", "切り替えカラートートバッグ(マリ・クレール)", 12600 ],
    [ "bag016-256.jpg", "セミショルダーバッグ", 3990 ],
    [ "bag017-256.jpg", "２ウェイセミショルダーバッグ(mini labo)", 2932 ],
    [ "bag018-256.jpg", "メタリック合皮使い２ウェイショルダーバッグ", 4990 ],
    [ "bag019-256.jpg", "ツーウェイワンショルダーバッグ(フィッチ)", 8190 ],
    [ "bag020-256.jpg", "パンチング手提げバッグ(ラメットベリー)", 7980 ],
    [ "bag021-256.jpg", "ショルダーバッグ(ディズニー)", 4990 ],
    [ "bag022-256.jpg", "綿麻トートバッグ", 3990 ],
    [ "bag023-256.jpg", "折りたたみビッグトートバッグ(ディズニー)", 2990 ],
    [ "bag024-256.jpg", "花柄トートバッグ", 9870 ],
    [ "bag025-256.jpg", "花柄バッグ", 9450 ],
    [ "bag026-256.jpg", "レザーツーウェイバッグ", 9990 ],
    [ "bag027-256.jpg", "ディパック(コールマン)", 4980 ],
    [ "bag028-256.jpg", "２ウェイがま口バッグ(ディズニー)", 4990 ],
    [ "bag029-256.jpg", "メッシュトートバッグ(デラクラッセ)", 7980 ],
    [ "bag030-256.jpg", "レザーワンショルダーバッグ", 9990 ],
    [ "bag031-256.jpg", "デイバッグ／トートバッグ(キャスキッドソン／Cath Kidston)", 7875 ],
    [ "bag032-256.jpg", "デイバッグ／トートバッグ(キャスキッドソン／Cath Kidston)", 7875 ],
    [ "bag033-256.jpg", "トートバッグ(Fascina／ファシーナ)", 5985 ],
    [ "bag034-256.jpg", "セミショルダーバッグ(デラクラッセ)", 7980 ],
    [ "bag035-256.jpg", "レザートートバッグ(Lucca Italy／ルカ イタリー)", 10500 ],
    [ "bag036-256.jpg", "レーザーカットトートバッグ", 4990 ],
    [ "bag037-256.jpg", "２ウェイマルチトートバッグ(mini labo)", 5990 ],
    [ "bag038-256.jpg", "ナイロンコンビ２ウェイバッグ", 4990 ],
    [ "bag039-256.jpg", "お受験バッグ", 2990 ],
    [ "bag040-256.jpg", "異素材コンビトートバッグ", 5990 ],
    [ "bag041-256.jpg", "レザーツーウェイバッグ", 15750 ],
    [ "bag042-256.jpg", "３ポケット２ウェイショルダーバッグ", 3990 ],
    [ "bag043-256.jpg", "セミショルダーバッグ", 3990 ],
    [ "bag044-256.jpg", "メッシュショルダーバッグ(ディズニー)", 3990 ],
    [ "bag045-256.jpg", "ショルダーバッグ(adidas/アディダス)", 2572 ],
    [ "bag046-256.jpg", "折りたたみ収納可能なナイロントートバッグ(ユナイテッドカラーズオブベネトン)", 2980 ],
    [ "bag047-256.jpg", "２ウェイショルダーバッグ(SAC)", 5145 ],
    [ "bag048-256.jpg", "カジュアルジムバッグ", 4990 ],
    [ "bag049-256.jpg", "小ぶりな異素材コンビ手さげバッグ", 3990 ],
    [ "bag050-256.jpg", "デイパック(SAC)", 5145 ],
    [ "bag051-256.jpg", "ムラシワ合皮２ウェイバッグ", 6195 ],
    [ "bag052-256.jpg", "三角形フォルムのショルダーバッグ", 4990 ],
    [ "bag053-256.jpg", "ツーウェイバッグ(マリ・クレール)", 16800 ],
    [ "bag054-256.jpg", "３室構造のショルダーバッグ", 4990 ],
    [ "bag055-256.jpg", "トートバッグ(ディズニー)", 3990 ],
    [ "bag056-256.jpg", "ジムバッグ(ディズニー)", 4990 ],
    [ "bag057-256.jpg", "パッカブルボストンバッグ(le coq sportif／ルコックスポルティフ)", 1995 ],
    [ "bag058-256.jpg", "チャーム付きセミショルダーバッグ(SAC)", 6195 ],
    [ "bag059-256.jpg", "リュックにもなる２ウェイショルダーバッグ", 4990 ],
    [ "bag060-256.jpg", "フェルト刺しゅう手提げバッグ", 1428 ],
    [ "bag061-256.jpg", "ブックトート／トートバッグ(キャスキッドソン／Cath Kidston)", 3307 ],
    [ "bag062-256.jpg", "２ウェイショルダーバッグ", 5990 ],
    [ "bag063-256.jpg", "２ウェイショルダーバッグ／１２５６０(ヴェラ ブラッドリー／Vera Bradley)", 5512 ],
    [ "bag064-256.jpg", "ミニバッグ(ルコック)", 1050 ],
    [ "bag065-256.jpg", "レザートートバッグ", 9990 ],
    [ "bag066-256.jpg", "通勤フィットネスバッグ（中）", 4590 ],
    [ "bag067-256.jpg", "トートバッグ", 3990 ],
    [ "bag068-256.jpg", "パンチングレザーツーウェイバッグ(ラメットベリー)", 13650 ],
    [ "bag069-256.jpg", "２ウェイナイロンバッグ", 2352 ],
    [ "bag070-256.jpg", "大容量！軽くて使いやすいピンドットボストンバッグ", 980 ],
    [ "bag071-256.jpg", "口金セミショルダーバッグ(デザインファクトリー)", 5145 ],
    [ "bag072-256.jpg", "手提げバッグ(帆布工房)", 3990 ],
    [ "bag073-256.jpg", "メッシュトートバッグ(ディズニー)", 4990 ],
    [ "bag074-256.jpg", "ＨＩＰＨＵＲＲＡＹ／手提げバッグ／１１２７６(キプリング／Kipling)", 2940 ],
    [ "bag075-256.jpg", "ガーメントケース", 3990 ],
    [ "bag076-256.jpg", "軽くてたっぷり入るトラベルボストンバッグ", 1290 ],
    [ "bag077-256.jpg", "ハードキャリーバッグ（大）", 13990 ],
    [ "bag078-256.jpg", "ミニドラムショルダー(ＲＯＸＹ／ロキシー)", 3990 ],
    [ "bag079-256.jpg", "スパンコールのキラキラでゴージャス感たっぷり☆手提げバッグ(デザインファクトリー)", 3045 ],
    [ "bag080-256.jpg", "コンパクト収納　ボストンバッグ(ルコック)", 1995 ],
    [ "bag081-256.jpg", "カジュアルジムバッグ", 4990 ],
    [ "bag082-256.jpg", "ダブルジップバッグ／ショルダーバッグ(キャスキッドソン／Cath Kidston)", 8268 ],
    [ "bag083-256.jpg", "オープンキャリオール／トートバッグ(キャスキッドソン／Cath Kidston)", 4567 ],
    [ "bag084-256.jpg", "ローズポーチ付きトートバッグ", 7980 ],
    [ "bag085-256.jpg", "２ウェイボストンバッグ(ディズニー)", 5990 ],
    [ "bag086-256.jpg", "キャリーケース（大）(ディズニー)", 18690 ],
    [ "bag087-256.jpg", "母の日　軽量ポケットいっぱい多機能バッグ", 3990 ],
    [ "bag088-256.jpg", "ポーチ付き軽量でＡ４も入り通勤にお役立ち☆２ウェイトートバッグ(ＳＡＣ／サック)", 4095 ],
    [ "bag089-256.jpg", "ボストンバッグ“オールラウンダーＭ”(ライゼンタール)", 3465,  ],
    [ "bag090-256.jpg", "レザー手提げバッグ", 9990 ],
    [ "bag091-256.jpg", "たためるビックエコバッグ(ディズニー)", 1990 ],
    [ "bag092-256.jpg", "キャリーケース(ROXY／ロキシー)", 12316 ],
    [ "bag093-256.jpg", "ツーウェイバッグ(ラメットベリー)", 3591 ],
    [ "bag094-256.jpg", "コーティングトートバッグ(ディズニー)", 4990 ],
    [ "bag095-256.jpg", "レディスフォーマルバッグ", 6990 ],
    [ "bag096-256.jpg", "ボストンバッグ／１２４７９(ヴェラ ブラッドリー／Vera Bradley)", 8820 ],
    [ "bag097-256.jpg", "ヴィンテージ／ランチトート／ＨＢ１Ｐ０１９(フォリフォリ／Folli Follie)", 5775 ],
    [ "bag098-256.jpg", "収納上手さんにオススメ☆２ウェイトートバッグ(ＳＡＣ／サック)", 6195 ],
    [ "bag099-256.jpg", "ショッパーＭ(ライゼンタール)", 1575 ],
    [ "bag100-256.jpg", "チェックウエストポーチ", 1596 ]
      ];

  this.PANEL_TEXTURE = [
    this.contents.textureCastsL["Texture_00"].index,
    this.contents.textureCastsL["Texture_01"].index,
    this.contents.textureCastsL["Texture_02"].index,
    this.contents.textureCastsL["Texture_03"].index,
    this.contents.textureCastsL["Texture_04"].index,
    this.contents.textureCastsL["Texture_05"].index,
    this.contents.textureCastsL["Texture_06"].index,
    this.contents.textureCastsL["Texture_07"].index,
    this.contents.textureCastsL["Texture_08"].index,
    this.contents.textureCastsL["Texture_09"].index,
    this.contents.textureCastsL["Texture_10"].index,
    this.contents.textureCastsL["Texture_11"].index,
    this.contents.textureCastsL["Texture_12"].index,
    this.contents.textureCastsL["Texture_13"].index,
    this.contents.textureCastsL["Texture_14"].index,
    this.contents.textureCastsL["Texture_15"].index,
    this.contents.textureCastsL["Texture_16"].index,
    this.contents.textureCastsL["Texture_17"].index,
    this.contents.textureCastsL["Texture_18"].index,
    this.contents.textureCastsL["Texture_19"].index,
    this.contents.textureCastsL["Texture_20"].index,
    this.contents.textureCastsL["Texture_21"].index,
    this.contents.textureCastsL["Texture_22"].index,
    this.contents.textureCastsL["Texture_23"].index,
    this.contents.textureCastsL["Texture_24"].index,
    this.contents.textureCastsL["Texture_25"].index,
    this.contents.textureCastsL["Texture_26"].index,
    this.contents.textureCastsL["Texture_27"].index,
    this.contents.textureCastsL["Texture_28"].index,
    this.contents.textureCastsL["Texture_29"].index,
    this.contents.textureCastsL["Texture_30"].index,
    this.contents.textureCastsL["Texture_31"].index,
    this.contents.textureCastsL["Texture_32"].index,
    this.contents.textureCastsL["Texture_33"].index,
    this.contents.textureCastsL["Texture_34"].index,
    this.contents.textureCastsL["Texture_35"].index
      ];

  // add
  this.sShelfScore = this.contents.scoresL["shelf"];

  //
  // consts
  //

  // 棚1面あたりのパネル数
  this.NUM_PANEL = 9;
  // 存在する面数
  this.NUM_FACES = 4;
  // 存在するパネル数
  this.MAX_PANELS = this.NUM_PANEL * this.NUM_FACES;
  // 仮想的な面数
  this.MAX_FACES  = this.ITEM_MAX / this.NUM_PANEL;

  // 棚の回転のフレーム数
  this.FRAME_SHELF_ROLL = 20;
  // パネルのポップアップのフレーム数
  this.FRAME_PANEL_POPUP = 5;
  // パネルのポップのフレーム数
  this.FRAME_SCREEN_POP = 15;

  //
  // member
  //

  this.main_count = 0;

  //
  // Mouse の座標管理
  //

  this.mouse_x = 0;
  this.mouse_y = 0;

  //
  // Shelf の回転の制御用
  //

  this.is_shelf_rolling = false;
  this.shelf_rol_state = 0;
  this.shelf_rol_state_pre = 0;
  this.shelf_rot = 0.0;
  this.shelf_rot_count = 0;
  this.is_shelf_rot_right = true;

  // 微妙な回転の制御用
  this.shelf_diff_rot = 0;
  this.shelf_diff_rv  = 0;

  // 面が最後に読み込んだアイテムを記憶する
  this.shelf_texture_loaded_item = [-1, -1, -1, -1];

  //
  // Panel の PopUp/PopDown の制御用
  //

  this.panel_original_pos = [];
  this.POPUP_TARGET_POS = [0, 23, -168];

  this.POPDOWN = 0;
  this.POPING = 1;
  this.POPUP = 2;
  this.panel_pop_state = [];

  this.is_panel_popup = false; 
  this.popup_panel_id = 0;
  this.popup_panel_count = 0;

  this.is_panel_popdown = false;
  this.popdown_panel_id = 0;
  this.popdown_panel_count = 0;

  //
  // Shelf の Root のパペット化
  //

  this.shelf_root = this.sShelfScore.tracks[0];
  this.shelf_root.setPuppet(true);
  this.shelf_root.frame.visible = true;


  //
  // Panel のパペット化
  //

  this.PANEL_TRACKS = [];
  this.PANEL_GHOST_TRACKS = [];

  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 9; ++j) {

      var pt = this.sShelfScore.tracks[i * 19 + j * 2 + 4];
      pt.setPuppet(true);
      pt.frame.visible = true;
      pt.frame.siz = [0.17, 0.17, 0.17];
      this.PANEL_TRACKS.push(pt);

      var gt = this.sShelfScore.tracks[i * 19 + j * 2 + 3];
      gt.setPuppet(true);
      gt.frame.pos = [(j%3 - 1) * 20, 35 - Math.floor( j / 3 ) * 31, -40];
      gt.frame.siz = [1, 1, 1];
      gt.frame.visible = true;
      this.PANEL_GHOST_TRACKS.push(gt);

      this.panel_original_pos.push(jQuery.extend(true, {}, gt.frame.pos));
      this.panel_pop_state.push(this.POPDOWN);
    }
  }

  //
  // Screen
  //
  
  this.SCREEN_POS_UP = [0, 490, 0];
  this.SCREEN_POS_DOWN = [0, 600, 0];

  this.screen_ghost = this.contents.scoresL["screen"].tracks[0];
  this.screen_ghost.setPuppet(true);
  this.screen_ghost.frame.pos = this.SCREEN_POS_DOWN;
  this.screen_ghost.frame.visible = true;

  this.UPING = 3;
  this.DOWNING = 4;
  this.STOP = 5;

  this.screen_pop_state = this.STOP;
  this.screen_pop_count = 0;


  //
  // Load Textures
  //

  this.load_textures(0);
  this.load_textures(1);
  this.load_textures(2);
  this.load_textures(3);


  //
  // Sort の種類
  //

  // 昇順と降順
  this.ASC = 0;
  this.DESC = 1;
  
  // ソートの種類
  this.SORT_NONE  = 0;
  this.SORT_PRICE = 2;

  // 現在のソートの状態
  this.sort_key = this.SORT_NONE;
  this.sort_order = this.ASC;

  this.update_caption();
}

//
// テスクチャの更新
//

Model.prototype.load_textures = function (face_n) {

  if (face_n == this.shelf_texture_loaded_item[face_n % this.NUM_FACES] || 
      face_n < 0 || face_n >= Math.ceil(this.MAX_FACES)) {
    return;
  }

  this.shelf_texture_loaded_item[face_n % this.NUM_FACES] = face_n;
  var item_n = face_n * this.NUM_PANEL;
  var texture_n = (face_n % this.NUM_FACES) * this.NUM_PANEL;

  for (var i = 0; i < this.NUM_PANEL; ++i) {

    var texture_id = texture_n + i;
    var item_id = item_n + i;

    if (item_id < this.ITEM_MAX) {
      var url = this.ITEM_IMAGE_PATH + this.ITEM_DATA[item_id][0];
      this.contents.textureCasts[this.PANEL_TEXTURE[texture_id]].loadImage(url);
      this.PANEL_TRACKS[texture_id].frame.visible = true;
    } else {
      this.PANEL_TRACKS[texture_id].frame.visible = false;
    }
  }
};

//
// ステータスバーの更新
//

Model.prototype.update_statusbar = function () {
  jQuery("div#status").css("width", "" + (100.0 * (this.shelf_rol_state+1) / (this.MAX_FACES)) + "%");
}

//
// 等間隔な [0 1] を入力として、EaseOutするような関数を返す
//

Model.prototype.easeOut = function (x) {
  return 1 - Math.exp(-6 * x);
}

//
// Util
//

Model.prototype.scale_pos = function(pos, d) {
  var new_pos = [];
  new_pos[0] = pos[0] * d;
  new_pos[1] = pos[1] * d;
  new_pos[2] = pos[2] * d;
  return new_pos;
}

Model.prototype.add_pos = function(p0, p1) {
  var new_pos = [];
  new_pos[0] = p0[0] + p1[0];
  new_pos[1] = p0[1] + p1[1];
  new_pos[2] = p0[2] + p1[2];
  return new_pos;
}

Model.prototype.diff_pos = function(p0, p1) {
  var new_pos = [];
  new_pos[0] = p0[0] - p1[0];
  new_pos[1] = p0[1] - p1[1];
  new_pos[2] = p0[2] - p1[2];
  return new_pos;
}

//
// パネルのポップアップ/ポップダウンの内部処理
//

Model.prototype.execute_pop_panel = function(panel_id, count) {
  var x = count / this.FRAME_PANEL_POPUP;// [0 1]の係数
  var z = this.easeOut(x);
  var original_pos = this.panel_original_pos[panel_id];
  var v = this.diff_pos(this.POPUP_TARGET_POS, original_pos);
  var diff = this.scale_pos(v, z);
  this.PANEL_GHOST_TRACKS[panel_id].frame.pos = this.add_pos(original_pos, diff);
}

//
// Main
//

Model.prototype.shelf_main = function () {

  // Shelf
  if (this.is_shelf_rolling) {
    var rd  = Math.PI / 2;
    var pad = this.shelf_rol_state_pre * rd;
    var d   = this.shelf_rot_count / this.FRAME_SHELF_ROLL;
    var z   = this.easeOut(d);
    this.shelf_rot = this.is_shelf_rot_right ? pad + rd * z : pad - rd * z;

    ++this.shelf_rot_count;

    if (this.shelf_rot_count > this.FRAME_SHELF_ROLL) {
      this.is_shelf_rolling = false;
      this.load_textures(this.shelf_rol_state + 1);
      this.load_textures(this.shelf_rol_state - 1);
    }
  }
  
  //this.shelf_diff_rot += this.shelf_diff_rv;
  //this.shelf_root.frame.rot[1] = this.shelf_rot + this.shelf_diff_rot;
  //this.shelf_diff_rot *= 0.7;
  //this.shelf_diff_rv  *= 0.7;
  this.shelf_root.frame.rot[1] = this.shelf_rot;

  // Panel PopUp
  if ( this.is_panel_popup && this.panel_pop_state[this.popup_panel_id] == this.POPING) {
    ++this.popup_panel_count;
    this.execute_pop_panel(this.popup_panel_id, this.popup_panel_count);
    //this.screen_move(this.popup_panel_count);
    if ( this.popup_panel_count == this.FRAME_PANEL_POPUP) {
      this.is_panel_popup = false;
      this.panel_pop_state[this.popup_panel_id] = this.POPUP;
    }
  }

  // Panel PopDown
  if ( this.is_panel_popdown && this.panel_pop_state[this.popdown_panel_id] == this.POPING) {
    --this.popdown_panel_count;
    this.execute_pop_panel(this.popdown_panel_id, this.popdown_panel_count);
    //this.screen_move(this.popdown_panel_count);
    if ( this.popdown_panel_count == 0) {
      this.is_panel_popdown = false;
      this.panel_pop_state[this.popdown_panel_id] = this.POPDOWN;
    }
  }

  // Screen
  if (this.screen_pop_state == this.UPING) {
    ++this.screen_pop_count;
    this.screen_move();
    if (this.scrren_pop_count == this.FRAME_SCREEN_POP) {
      this.screen_pop_state = this.STOP;
    }
  }else if (this.screen_pop_state == this.DOWNING) {
    --this.screen_pop_count;
    this.screen_move();
    if (this.scrren_pop_count == 0) {
      this.screen_pop_state = this.STOP;
    }
  }

  // Main Count
  if (this.main_count == 0) {
    this.update_statusbar();
  }
  ++this.main_count;
};

//
// Mouse Move
//

Model.prototype.mouse_move = function (e) {

  if (this.panel_pop_state[this.popup_panel_id] == this.POPDOWN) {
    this.shelf_diff_rv += 0.0001 * ( e.x - this.mouse_x);
  }
  //this.shelf_diff_rot = 0.0001 * (e.x - 400);

  this.mouse_x = e.x;
  this.mouse_y = e.y;

  jQuery("div#console").html(e.x);
};


Model.prototype.mouse_down = function (e) {

};

Model.prototype.mouse_up = function (e) {

};


//
// 棚の左回転
//

Model.prototype.shelf_turn_left = function () {
  if (!this.is_shelf_rolling && this.shelf_rol_state > 0) {

    this.force_panel_popdown();

    this.is_shelf_rolling = true;
    this.is_shelf_rot_right = false;
    this.shelf_rot_count = 0;

    this.shelf_rol_state_pre = this.shelf_rol_state;
    --this.shelf_rol_state;

    //this.load_textures(this.shelf_rol_state-1);
    this.update_statusbar();
    this.update_caption();
  }
};

//
// 棚の右回転
//

Model.prototype.shelf_turn_right = function () {
  if (!this.is_shelf_rolling && this.shelf_rol_state < this.MAX_FACES - 1) {

    this.force_panel_popdown();

    this.is_shelf_rolling = true;
    this.is_shelf_rot_right = true;
    this.shelf_rot_count = 0;

    this.shelf_rol_state_pre = this.shelf_rol_state;
    ++this.shelf_rol_state;

    //this.load_textures(this.shelf_rol_state+1);
    this.update_statusbar();
    this.update_caption();
  }
};

//
// PopUpされたPanelの強制PopDown
//

Model.prototype.force_panel_popdown = function () {

  var panel_id = this.popup_panel_id;
  if (panel_id == -1 || this.panel_pop_state[panel_id] != this.POPUP) {
    return;
  }

  this.is_panel_popdown = true;
  this.popdown_panel_id = panel_id;
  this.popdown_panel_count = this.FRAME_PANEL_POPUP;
  this.panel_pop_state[panel_id] = this.POPING;

  this.screen_pop_state = this.DOWNING;
}

//
// パネルのクリック
//

Model.prototype.panel_click = function (panel_id) {

  if (panel_id == -1 || this.is_panel_popup || this.is_panel_popdown) {
    return;
  }

  // PopDown
  if ( this.panel_pop_state[panel_id] == this.POPUP ) {
    this.is_panel_popdown = true;
    this.popdown_panel_id = panel_id;
    this.popdown_panel_count = this.FRAME_PANEL_POPUP;
    this.panel_pop_state[panel_id] = this.POPING;

    // Screen
    this.screen_pop_state = this.DOWNING;
    this.screen_pop_count = this.FRAME_SCREEN_POP;
  }

  // PopUp
  if ( this.panel_pop_state[panel_id] == this.POPDOWN ) {

    this.force_panel_popdown();

    this.is_panel_popup = true;
    this.popup_panel_id = panel_id;
    this.popup_panel_count = 0;
    this.panel_pop_state[panel_id] = this.POPING;

    // Screen
    var item_id = this.shelf_rol_state * this.NUM_PANEL + this.popup_panel_id % this.NUM_PANEL;
    this.contents.textCastsL["NameText"].lines[0] = "#" + item_id + " " + this.ITEM_DATA[item_id][1];
    this.contents.textCastsL["PriceText"].lines[0] = "" + this.ITEM_DATA[item_id][2] + "円";
    this.contents.textCastsL["NameText"].invalidate();
    this.contents.textCastsL["PriceText"].invalidate();

    this.screen_pop_state = this.UPING;
    this.screen_pop_count = 0;
  }
}


//
// Scrren Pop
//

Model.prototype.screen_move = function () {
  var x = this.screen_pop_count / this.FRAME_SCREEN_POP;// [0 1]の係数
  var z = this.easeOut(x);
  var v = this.diff_pos(this.SCREEN_POS_UP, this.SCREEN_POS_DOWN);
  var diff = this.scale_pos(v, z);
  this.screen_ghost.frame.pos = this.add_pos(this.SCREEN_POS_DOWN, diff);
}

//
// Captionの更新
//

Model.prototype.limit_panel_id = function (panel_id) {
  //return panel_id.limit(0, this.ITEM_MAX - 1);
  if (panel_id >= this.ITEM_MAX) {
    return this.ITEM_MAX - 1;
  }else if (panel_id < 0 ) {
    return 0;
  } else {
    return panel_id;
  }
}

Model.prototype.update_caption_value = function (value) {
  //this.contents.textCastsL["Caption"].lines[0] = value;
  //this.contents.textCastsL["Caption"].invalidate();
  jQuery("div#caption").html(value);
}

Model.prototype.update_caption = function () {
  var x = this.limit_panel_id(this.shelf_rol_state * this.NUM_PANEL);
  var y = this.limit_panel_id((this.shelf_rol_state + 1) * this.NUM_PANEL - 1);
  var caption = "" + this.ITEM_DATA[x][this.sort_key] + " - " + this.ITEM_DATA[y][this.sort_key];

  this.update_caption_value(caption);
}

//
// Item の Sort
//

// UFO演算子的な何か
Model.prototype.ufo = function (a, b){
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

// 比較用関数を返す
Model.prototype.get_compare = function (key, order) {
  switch (order) {
    case this.ASC:
      return function (a,b) { return model.ufo(a[key], b[key]); };
    case this.DESC:
      return function (a,b) { return model.ufo(b[key], a[key]); };
    default:
      return null;
  }
}

Model.prototype.sort_items = function (key, order) {

  this.sort_key = key;
  this.sort_order = order;

  var compare = this.get_compare(key, order);

  this.force_panel_popdown();
  this.ITEM_DATA.sort(compare);

  // テスクチャの更新
  this.shelf_texture_loaded_item = [-1, -1, -1, -1];
  this.load_textures(this.shelf_rol_state - 1);
  this.load_textures(this.shelf_rol_state);
  this.load_textures(this.shelf_rol_state + 1);

  this.update_caption();
}
