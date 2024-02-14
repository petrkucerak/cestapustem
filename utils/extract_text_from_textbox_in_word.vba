Sub DeleteTextBoxesAndExtractTheText()
  Dim nNumber As Integer
  Dim strText As String

  '  Delete all textboxes and extract the text from them
  With ActiveDocument
    For nNumber = .Shapes.Count To 1 Step -1
    If .Shapes(nNumber).Type = msoTextBox Then
      strText = .Shapes(nNumber).TextFrame.TextRange.Text & vbCr & strText
      .Shapes(nNumber).Delete
    End If
  Next
  End With

  '  Open a new document to paste the text from textboxes.
  If strText <> "" Then
    Documents.Add Template:="Normal"
    ActiveDocument.Range.Text = strText
  Else
    MsgBox ("There is no textbox.")
  End If
End Sub
