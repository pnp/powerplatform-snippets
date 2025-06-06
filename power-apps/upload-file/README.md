# Upload File

This snippet allows you to import files by dragging and dropping them onto a designated area.

![Upload File](./assets/uploadfile.gif)

## Authors

Snippet|Author
--------|---------
Steve Bourdin | [GitHub](https://github.com/SteveBourdin) ([@steve-bourdin-ab998762](https://www.linkedin.com/in/steve-bourdin-ab998762/) )

## Minimal path to awesome

1. Open your canvas app in **Power Apps**
1. Copy the contents of the **[YAML-file](./source/minesweeper.yaml)** 
1. Click on the three dots of the screen where you want to add the snippet and select "Paste code"
1. To save the imported files, use the btn_uploadfile_save element with the OnSelect attribute.

## Code

``` YAML
- uploadFileSnippet:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      ContentLanguage: =/*Steve BOURDIN - MOCA by ASI sbourdin@asi.fr  Mars 2025*/
      DropShadow: =DropShadow.Bold
      Height: =2*Parent.Height/2
      Width: =Parent.Width/2
      X: =Parent.Width/4
    Children:
      - btn_uploadfile_save:
          Control: Button@0.0.44
          Properties:
            OnSelect: |
              =ForAll(var_uploadFile_listeAttachment,
              //Mettre ici les enregistrement des pièces jointes
              ThisRecord.Name // Nom du fichier 
              & ThisRecord.Value // Données binaires du fichier
              );
              ClearCollect(var_uploadFile_listeAttachment,Blank())
              //Steve BOURDIN - MOCA by ASI 03/2025
            Visible: =false
            X: =40
            Y: =40
      - cont_uploadfile:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: =Parent.Height
            Width: =Parent.Width
          Children:
            - btn_fond:
                Control: Classic/Button@2.2.0
                Properties:
                  BorderColor: |-
                    =If(IsBlank(var_uploadFile_primaryColor), RGBA(
                                    0,
                                    134,
                                    208,
                                    1
                                ),var_uploadFile_primaryColor)
                  Color: =Self.BorderColor
                  DisabledBorderColor: =RGBA(166, 166, 166, 1)
                  Fill: =If(IsBlank( var_uploadFile_secondaryColor),Color.White,var_uploadFile_secondaryColor)
                  Font: =Font.'Open Sans'
                  Height: =pj_piecejointe.Height
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =ColorFade(RGBA(56, 96, 178, 1), -20%)
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =Self.Color
                  RadiusBottomLeft: =90
                  RadiusBottomRight: =90
                  RadiusTopLeft: =90
                  RadiusTopRight: =90
                  Size: =18
                  Text: =If(Len(var_uploadFile_MSG_Depose)=0,"Drag your file here",var_uploadFile_MSG_Depose)
                  Width: =pj_piecejointe.Width
                  X: =pj_piecejointe.X
                  Y: =pj_piecejointe.Y
            - pj_piecejointe:
                Control: Attachments@2.3.0
                Properties:
                  AddAttachmentColor: =Blank()
                  AddAttachmentText: =""
                  AddedItemColor: =Color.Red
                  AddedItemFill: =Color.Red
                  BorderColor: =Blank()
                  BorderThickness: =0
                  DropTargetBackgroundColor: =RGBA(237, 237, 237, 0.5)
                  DropTargetBorderColor: =Blank()
                  DropTargetBorderThickness: =0
                  DropTargetTextColor: =RGBA(237, 237, 237, 0.5)
                  Fill: =RGBA(255, 255, 255, 0)
                  FocusedBorderColor: =Blank()
                  FocusedBorderThickness: =0
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height/4
                  HoverFill: =RGBA(186, 202, 226, 1)
                  ItemColor: =Blank()
                  ItemDisabledColor: =Blank()
                  ItemDisabledFill: =Blank()
                  ItemErrorColor: =Blank()
                  ItemErrorFill: =Blank()
                  ItemFill: =Blank()
                  ItemHoverColor: =Blank()
                  ItemHoverFill: =Blank()
                  ItemPressedColor: =Blank()
                  ItemPressedFill: =Blank()
                  Items: =Blank()
                  MaxAttachmentsText: =var_uploadFile_MSG_MaxFile
                  NoAttachmentsText: =""
                  OnAddFile: =Collect(var_uploadFile_listeAttachment, Self.Attachments);Reset(Self)
                  PaddingBottom: =5
                  PaddingLeft: =If(Self.DisplayMode = DisplayMode.Edit, 5, 0)
                  PaddingRight: =5
                  PaddingTop: =5
                  PressedColor: =RGBA(255, 255, 255, 1)
                  PressedFill: =RGBA(0, 18, 107, 1)
                  Tooltip: =Blank()
                  Width: =18*Parent.Width/20
                  X: =Parent.Width/20
                  Y: =If(CountRows(var_uploadFile_listeAttachment)>0, Parent.Height/16,Parent.Height/2-Self.Height/2)
            - gal_files:
                Control: Gallery@2.15.0
                Variant: Vertical
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Height: =2*Parent.Height/4
                  Items: =var_uploadFile_listeAttachment
                  TemplatePadding: =0
                  TemplateSize: =RoundDown((Self.Height/(If(Self.AllItemsCount=0,1,RoundUp(Self.AllItemsCount/2,0)))),0)
                  Visible: =CountRows(var_uploadFile_listeAttachment)>0
                  Width: =18*Parent.Width/20
                  WrapCount: =2
                  X: =Parent.Width/20
                  Y: = Parent.Height/16+btn_fond.Height+10
                Children:
                  - lab_title:
                      Control: Label@2.5.1
                      Properties:
                        Align: =Align.Center
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Font: =Font.'Open Sans'
                        Height: =gal_files.TemplateHeight/4
                        OnSelect: =Select(Parent)
                        Size: =Self.Height*16/69
                        Text: |-
                          =If(
                              "." in ThisItem.Name,
                              First(
                                  Split(
                                      ThisItem.Name,
                                      "."
                                  )
                              ).Value,
                              ThisItem.Name
                          )
                        Width: =Parent.TemplateWidth
                        Y: =3*gal_files.TemplateHeight/4
                  - img_file:
                      Control: Image@2.2.3
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Height: =3*Parent.TemplateHeight/4
                        Image: |-
                          =Switch(
                              Lower(
                                  Last(
                                      Split(
                                          ThisItem.Name,
                                          "."
                                      )
                                  ).Value
                              ),
                              "xlsx",
                              var_uploadFile_Excel,
                              "xls",
                              var_uploadFile_Excel,
                              "ppt",
                              var_uploadFile_PPT,
                              "pptx",
                              var_uploadFile_PPT,
                              "pdf",
                              var_uploadFile_PDF,
                              "doc",
                              var_uploadFile_Word,
                              "docx",
                              var_uploadFile_Word,
                              ThisItem.Value
                          )
                        OnSelect: =Select(Parent)
                        Visible: =".png" in Lower(ThisItem.Name) || ".jpg" in Lower(ThisItem.Name)|| ".jpeg" in Lower(ThisItem.Name)||".bmp" in Lower(ThisItem.Name)||".gif" in Lower (ThisItem.Name) || Lower(Last(Split(ThisItem.Name,".")).Value) in ["xls","xlsx","pdf","ppt","pptx","doc","docx"]
                        Width: =Parent.TemplateWidth
                  - ico_file:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =RGBA(0, 18, 107, 1)
                        Height: =img_file.Height
                        Icon: =Icon.DocumentWithContent
                        OnSelect: =Select(Parent)
                        Visible: =img_file.Visible = false
                        Width: =img_file.Width
                        X: =img_file.X
                        Y: =img_file.Y
                  - ico_delete:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =RGBA(168, 0, 0, 1)
                        Height: =gal_files.TemplateWidth/10
                        Icon: =Icon.CancelBadge
                        OnSelect: |
                          =
                          Remove(
                              var_uploadFile_listeAttachment,
                              ThisItem
                          );
                        Width: =gal_files.TemplateWidth/10
                        X: =9*gal_files.TemplateWidth/10
            - tim_initialisation:
                Control: Timer@2.1.0
                Properties:
                  AutoStart: =true
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =ColorFade(Self.BorderColor, 70%)
                  DisabledColor: =ColorFade(Self.Fill, 90%)
                  DisabledFill: =ColorFade(Self.Fill, 70%)
                  Duration: =600
                  Fill: =RGBA(56, 96, 178, 1)
                  Font: =Font.'Open Sans'
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =ColorFade(RGBA(56, 96, 178, 1), -20%)
                  OnTimerStart: |-
                    =If(
                        IsBlank(var_uploadFile_primaryColor),
                        UpdateContext(
                            {
                                var_uploadFile_primaryColor: RGBA(
                                    0,
                                    134,
                                    208,
                                    1
                                )
                            }
                        )
                    );
                    If(
                        IsBlank(var_uploadFile_secondaryColor),
                        UpdateContext({var_uploadFile_secondaryColor: Color.White})
                    );
                    UpdateContext(
                        {
                            var_uploadFile_Excel: "data:image/svg+xml;utf8, " & EncodeUrl("<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 48 48' width='48px' height='48px'><path fill='#169154' d='M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z'/><path fill='#18482a' d='M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z'/><path fill='#0c8045' d='M14 15.003H29V24.005000000000003H14z'/><path fill='#17472a' d='M14 24.005H29V33.055H14z'/><g><path fill='#29c27f' d='M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z'/><path fill='#27663f' d='M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z'/><path fill='#19ac65' d='M29 15.003H44V24.005000000000003H29z'/><path fill='#129652' d='M29 24.005H44V33.055H29z'/></g><path fill='#0c7238' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z'/></svg>"),
                            var_uploadFile_PDF: "data:image/svg+xml;utf8, " & EncodeUrl(
                                "<svg version='1.1' id='_x34_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' 
                    	 viewBox='0 0 512 512'  xml:space='preserve'>
                    <g>
                    	<polygon style='fill:#FFFEFE;' points='475.435,117.825 475.435,512 47.791,512 47.791,0.002 357.613,0.002 412.491,54.881 	'/>
                    	<rect x='36.565' y='34.295' style='fill:#B43331;' width='205.097' height='91.768'/>
                    	<g>
                    		<g>
                    			<path style='fill:#FFFEFE;' d='M110.133,64.379c-0.905-2.186-2.111-4.146-3.769-5.804c-1.659-1.658-3.694-3.015-6.031-3.92
                    				c-2.412-0.98-5.127-1.432-8.141-1.432H69.652v58.195h11.383V89.481h11.157c3.015,0,5.729-0.452,8.141-1.432
                    				c2.337-0.905,4.371-2.261,6.031-3.92c1.658-1.658,2.865-3.543,3.769-5.804c0.828-2.186,1.281-4.523,1.281-6.935
                    				C111.413,68.902,110.961,66.565,110.133,64.379z M97.845,77.118c-1.508,1.432-3.618,2.186-6.182,2.186H81.035V63.323h10.628
                    				c2.564,0,4.674,0.754,6.182,2.261c1.432,1.432,2.185,3.392,2.185,5.804C100.031,73.726,99.277,75.686,97.845,77.118z'/>
                    			<path style='fill:#FFFEFE;' d='M164.558,75.761c-0.075-2.035-0.15-3.844-0.377-5.503c-0.225-1.659-0.603-3.166-1.131-4.598
                    				c-0.527-1.357-1.206-2.714-2.111-3.92c-2.035-2.94-4.522-5.126-7.312-6.483c-2.864-1.357-6.256-2.035-10.252-2.035H122.42v58.195
                    				h20.956c3.996,0,7.388-0.678,10.252-2.035c2.79-1.357,5.277-3.543,7.312-6.483c0.905-1.206,1.584-2.563,2.111-3.92
                    				c0.528-1.432,0.905-2.94,1.131-4.598c0.227-1.658,0.301-3.468,0.377-5.503c0.075-1.96,0.075-4.146,0.075-6.558
                    				C164.633,79.908,164.633,77.721,164.558,75.761z M153.175,88.2c0,1.734-0.15,3.091-0.302,4.297
                    				c-0.151,1.131-0.376,2.186-0.678,2.94c-0.301,0.829-0.754,1.583-1.281,2.261c-1.885,2.412-4.749,3.543-8.518,3.543h-8.668V63.323
                    				h8.668c3.769,0,6.634,1.206,8.518,3.618c0.528,0.678,0.98,1.357,1.281,2.186c0.302,0.829,0.528,1.809,0.678,3.015
                    				c0.152,1.131,0.302,2.563,0.302,4.221c0.075,1.659,0.075,3.694,0.075,5.955C153.251,84.581,153.251,86.541,153.175,88.2z'/>
                    			<path style='fill:#FFFEFE;' d='M213.18,63.323V53.222h-38.37v58.195h11.383V87.823h22.992V77.646h-22.992V63.323H213.18z'/>
                    		</g>
                    		<g>
                    			<path style='fill:#FFFEFE;' d='M110.133,64.379c-0.905-2.186-2.111-4.146-3.769-5.804c-1.659-1.658-3.694-3.015-6.031-3.92
                    				c-2.412-0.98-5.127-1.432-8.141-1.432H69.652v58.195h11.383V89.481h11.157c3.015,0,5.729-0.452,8.141-1.432
                    				c2.337-0.905,4.371-2.261,6.031-3.92c1.658-1.658,2.865-3.543,3.769-5.804c0.828-2.186,1.281-4.523,1.281-6.935
                    				C111.413,68.902,110.961,66.565,110.133,64.379z M97.845,77.118c-1.508,1.432-3.618,2.186-6.182,2.186H81.035V63.323h10.628
                    				c2.564,0,4.674,0.754,6.182,2.261c1.432,1.432,2.185,3.392,2.185,5.804C100.031,73.726,99.277,75.686,97.845,77.118z'/>
                    		</g>
                    	</g>
                    	<polygon style='opacity:0.08;fill:#040000;' points='475.435,117.825 475.435,512 47.791,512 47.791,419.581 247.706,219.667 
                    		259.541,207.832 266.099,201.273 277.029,190.343 289.995,177.377 412.491,54.881 	'/>
                    	<polygon style='fill:#BBBBBA;' points='475.435,117.836 357.6,117.836 357.6,0 	'/>
                    	<g>
                    		<path style='fill:#B43331;' d='M414.376,370.658c-2.488-4.372-5.88-8.518-10.101-12.287c-3.467-3.166-7.538-6.106-12.137-8.82
                    			c-18.543-10.93-45.003-16.207-80.961-16.207h-3.618c-1.96-1.809-3.996-3.618-6.106-5.503
                    			c-13.644-12.287-24.499-25.63-32.942-40.48c16.583-36.561,24.499-69.126,23.519-96.867c-0.151-4.674-0.83-9.046-2.036-13.117
                    			c-1.808-6.558-4.824-12.363-9.046-17.112c-0.075-0.075-0.075-0.075-0.15-0.151c-6.709-7.538-16.056-11.835-25.555-11.835
                    			c-9.574,0-18.393,4.146-24.802,11.76c-6.331,7.538-9.724,17.866-9.875,30.002c-0.225,18.544,1.282,36.108,4.448,52.315
                    			c0.301,1.282,0.528,2.563,0.829,3.844c3.166,14.7,7.84,28.645,13.871,41.611c-7.086,14.398-14.248,26.836-19.222,35.279
                    			c-3.769,6.408-7.916,13.117-12.213,19.826c-19.373,3.468-35.807,7.689-50.129,12.966c-19.374,7.011-34.903,16.056-46.059,26.836
                    			c-7.238,6.935-12.137,14.323-14.55,22.012c-2.563,7.915-2.411,15.83,0.453,22.916c2.638,6.558,7.387,12.061,13.719,15.83
                    			c1.508,0.905,3.091,1.658,4.749,2.337c4.825,1.96,10.102,3.015,15.604,3.015c12.74,0,25.856-5.503,36.938-15.378
                    			c20.654-18.469,41.988-48.169,54.576-66.94c10.327-1.583,21.559-2.94,34.224-4.297c14.927-1.508,28.118-2.412,40.104-2.865
                    			c3.694,3.317,7.237,6.483,10.63,9.498c18.846,16.81,33.168,28.947,46.134,37.465c0,0.075,0.075,0.075,0.15,0.075
                    			c5.127,3.392,10.026,6.181,14.926,8.443c5.502,2.563,11.081,3.92,16.81,3.92c7.237,0,14.021-2.186,19.675-6.181
                    			c5.729-4.146,9.875-10.101,11.76-16.81C420.181,387.694,418.899,378.724,414.376,370.658z M247.706,219.667
                    			c-1.056-9.348-1.508-19.072-1.357-29.324c0.15-9.724,3.694-16.283,8.895-16.283c3.919,0,8.066,3.543,9.951,10.327
                    			c0.528,2.035,0.905,4.372,0.98,7.01c0.15,3.166,0.075,6.483-0.075,9.875c-0.452,9.574-2.112,19.75-4.976,30.681
                    			c-1.734,7.011-3.995,14.323-6.784,21.936C251.173,243.186,248.911,231.803,247.706,219.667z M121.968,418.073
                    			c-1.282-3.166,0.15-9.272,7.99-16.81c11.985-11.458,30.755-20.504,56.914-27.364c-4.976,6.784-9.875,12.966-14.625,18.619
                    			c-7.237,8.744-14.172,16.132-20.429,21.71c-5.351,4.824-11.232,7.84-16.81,8.594c-0.98,0.151-1.96,0.226-2.94,0.226
                    			C127.169,423.049,123.173,421.089,121.968,418.073z M242.428,337.942l0.528-0.829l-0.829,0.151
                    			c0.15-0.377,0.377-0.754,0.602-1.055c3.167-5.352,7.161-12.212,11.458-20.127l0.377,0.829l0.98-2.035
                    			c3.166,4.523,6.634,8.971,10.252,13.267c1.735,2.035,3.544,3.995,5.352,5.955l-1.205,0.075l1.055,0.98
                    			c-3.09,0.226-6.331,0.528-9.573,0.829c-2.036,0.226-4.147,0.377-6.257,0.603C250.796,337.037,246.499,337.49,242.428,337.942z
                    			 M369.298,384.98c-8.97-5.729-18.997-13.795-31.36-24.575c17.564,1.809,31.36,5.654,41.159,11.383
                    			c4.297,2.488,7.538,5.051,9.724,7.538c3.619,3.844,4.901,7.312,4.221,9.649c-0.602,2.337-3.241,3.92-6.483,3.92
                    			c-1.885,0-3.844-0.452-5.879-1.432c-3.468-1.658-7.086-3.694-10.931-6.181C369.598,385.282,369.448,385.131,369.298,384.98z'/>
                    	</g>
                    </g>
                    </svg>"
                            ),
                            var_uploadFile_PPT: "data:image/svg+xml;utf8, " & EncodeUrl("<svg width='800px' height='800px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>file_type_powerpoint2</title><path d='M18.536,2.321V5.184c3.4.019,7.357-.035,10.754.016.642,0,.67.568.678,1.064.054,5.942-.013,12.055.032,18-.012.234-.006,1.1-.013,1.346-.022.823-.434.859-1.257.884-.132,0-.52.006-.648.012-3.181-.016-6.362-.009-9.546-.009v3.182L2,27.134Q2,16,2,4.873L18.536,2.322' style='fill:#d33922'/><path d='M18.536,6.138h10.5v19.4h-10.5V23H26.17V21.725H18.536V20.135H26.17V18.863H18.539c0-.624,0-1.247-.006-1.87a4.467,4.467,0,0,0,3.82-.375,4.352,4.352,0,0,0,1.959-3.474c-1.4-.01-2.793-.006-4.186-.006,0-1.384.016-2.767-.029-4.148-.522.1-1.043.21-1.562.321V6.139' style='fill:#fff'/><path d='M20.766,8.324a4.476,4.476,0,0,1,4.186,4.167c-1.4.016-2.793.01-4.189.01,0-1.393,0-2.787,0-4.177' style='fill:#d33922'/><path d='M7.1,10.726c1.727.083,3.82-.684,5.252.611,1.371,1.664,1.008,4.724-1.024,5.719A4.7,4.7,0,0,1,9,17.348c0,1.244-.006,2.488,0,3.731-.63-.054-1.263-.108-1.893-.159-.029-3.4-.035-6.8,0-10.2' style='fill:#fff'/><path d='M8.993,12.446c.627-.029,1.4-.143,1.826.445a2.308,2.308,0,0,1,.041,2.087c-.363.655-1.183.592-1.816.668-.067-1.066-.06-2.131-.051-3.2' style='fill:#d33922'/></svg>"),
                            var_uploadFile_Word: "data:image/svg+xml;utf8, " & EncodeUrl("<svg width='800px' height='800px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><defs><linearGradient id='a' x1='4.494' y1='-1712.086' x2='13.832' y2='-1695.914' gradientTransform='translate(0 1720)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#2368c4'/><stop offset='0.5' stop-color='#1a5dbe'/><stop offset='1' stop-color='#1146ac'/></linearGradient></defs><title>file_type_word</title><path d='M28.806,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5l11.069,3.25L30,9.5V4.191A1.192,1.192,0,0,0,28.806,3Z' style='fill:#41a5ee'/><path d='M30,9.5H8.512V16l11.069,1.95L30,16Z' style='fill:#2b7cd3'/><path d='M8.512,16v6.5L18.93,23.8,30,22.5V16Z' style='fill:#185abd'/><path d='M9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5H8.512v5.309A1.192,1.192,0,0,0,9.705,29Z' style='fill:#103f91'/><path d='M16.434,8.2H8.512V24.45h7.922a1.2,1.2,0,0,0,1.194-1.191V9.391A1.2,1.2,0,0,0,16.434,8.2Z' style='opacity:0.10000000149011612;isolation:isolate'/><path d='M15.783,8.85H8.512V25.1h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z' style='opacity:0.20000000298023224;isolation:isolate'/><path d='M15.783,8.85H8.512V23.8h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z' style='opacity:0.20000000298023224;isolation:isolate'/><path d='M15.132,8.85H8.512V23.8h6.62a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.132,8.85Z' style='opacity:0.20000000298023224;isolation:isolate'/><path d='M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z' style='fill:url(#a)'/><path d='M6.9,17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3,5.326a7.761,7.761,0,0,1,.162,1h.022a7.6,7.6,0,0,1,.135-.975l1.039-5.358h1.477l-1.824,7.748H10.591L9.354,14.742q-.054-.222-.122-.578t-.084-.52H9.127q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78,19.871H6.024L4.19,12.127h1.5l1.131,5.418A4.469,4.469,0,0,1,6.9,17.988Z' style='fill:#fff'/></svg>")
                        }
                    );
                    //FRA
                    /*
                    UpdateContext(
                        {
                            var_uploadFile_MSG_Depose: "Glissez vos fichiers ici";
                            var_uploadFile_MSG_Save: "Enregistrer";
                            var_uploadFile_MSG_Cancel: "Annuler";
                            var_uploadFile_MSG_MaxFile: "Le nombre maximal de fichiers est atteint."
                        }
                    )*/
                    //UK

                    UpdateContext(
                        {
                            var_uploadFile_MSG_Depose: "Drag your file here",
                            var_uploadFile_MSG_Save: "Save",
                            var_uploadFile_MSG_Cancel: "Cancel",
                            var_uploadFile_MSG_MaxFile: "The maximum number of files is reached."
                        }
                    )
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =Self.Color
                  Start: =true
                  Visible: =false
                  X: =40
                  Y: =40
            - cont_sauvegarde:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  Height: =Parent.Height-Self.Y
                  LayoutAlignItems: =LayoutAlignItems.Stretch
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                  PaddingBottom: =Self.Height/4
                  PaddingLeft: =Parent.Width/4
                  PaddingRight: =Parent.Width/4
                  PaddingTop: =Self.Height/4
                  Visible: =CountRows(var_uploadFile_listeAttachment)>0
                  Width: =Parent.Width
                  Y: =gal_files.Y+gal_files.Height
                Children:
                  - btn_cancel:
                      Control: Button@0.0.44
                      Properties:
                        Appearance: ='ButtonCanvas.Appearance'.Primary
                        BasePaletteColor: =RGBA(249, 83, 109, 1)
                        OnSelect: =ClearCollect(var_uploadFile_listeAttachment,Blank());Reset(pj_piecejointe)
                        Text: =var_uploadFile_MSG_Cancel
                        Width: =Parent.Width/6
                  - btn_confirm:
                      Control: Button@0.0.44
                      Properties:
                        BasePaletteColor: =RGBA(8, 222, 8, 1)
                        OnSelect: =Select(btn_uploadfile_save)
                        Text: =var_uploadFile_MSG_Save
                        Width: =Parent.Width/6

```
## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/upload-file" aria-hidden="true" />




