import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, AbstractControl} from '@angular/forms';

@Component({
  selector: 'vfg-check-list',
  templateUrl: './vfg-check-list.component.html',
  styleUrls: ['./vfg-check-list.component.css']
})
export class VfgCheckListComponent implements OnInit {

  @Input() list: Array<any>;
  @Input() label: string;

  @Output() update = new EventEmitter<any>();

  private static instanceCounter: number = 0;

  private id: string;
  private checkForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.checkForm = new FormGroup({
        checks: new FormArray([])
    });

    this.id = 'vfg-check-list_'.concat(String(VfgCheckListComponent.instanceCounter)).concat('_');
    VfgCheckListComponent.instanceCounter++;
    console.log('constructor', this.id);
  }

    ngOnInit() {
      this.checkForm.valueChanges.subscribe( form => {
        let temp = this.list.filter( function(currentValue, index, arr) {
          return form.checks[index];
        });
        this.update.emit(temp);
      });
     
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes!.list!.currentValue !== undefined) {
          if (changes.list.currentValue.length>0) {
            this.checkForm.setControl('checks', this.buildFormItems());
          } else {
            this.checkForm.setControl('checks', new FormArray([]));
          }
        }
    }

    private buildFormItems(): FormArray {
      const arr = this.list.map(item => {
        return this.formBuilder.control(false);
      });
      return this.formBuilder.array(arr);  
    }

    get checksControls(): AbstractControl[] {
      if (null!=this.checkForm) {
        return (this.checkForm.get('checks') as FormArray).controls;
      } else {
        return [];
      }
    };

    private getPropertie(index): String {
      for (let [key, value] of Object.entries(this.list[index])) {  
        if (key === this.label) {
          return value as String;
        }
      }
      return "Not found";
    }
}
